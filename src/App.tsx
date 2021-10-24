import { ContextType, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';

import AuthContext, { UserData } from 'contexts/AuthContext';
import HeadingContext from 'contexts/HeadingContext';
import Spinner from 'components/style-guide/Spinner';
import useCookie from 'hooks/useCookie';
import Sidebar from 'components/Sidebar';
import Overlay from 'components/style-guide/Overlay';
import useFetch from 'hooks/useFetch';
import Alert from './components/style-guide/Alert';
import Heading, { HeadingLevel } from 'components/style-guide/Heading';

export default function App() {
	const [accessToken, setAccessToken, removeAccessToken] = useCookie<string | null>(
		'access_token',
		null,
	);
	const [user, setUser] = useState<UserData | null>(null);
	const [isLoadingUser, setIsLoadingUser] = useState(true);

	const history = useHistory();

	const [todo, { abort }] = useFetch<{
		completed: boolean;
		id: number;
		title: string;
		userId: number;
	}>('https://jsonplaceholder.typicode.com/todos/1');

	useEffect(() => {
		abort();
	}, [abort]);

	// an effect to load the user if one is saved as an access token
	useEffect(() => {
		(async () => {
			if (accessToken) {
				setIsLoadingUser(true);
				const { accessToken: returnedAccessToken, ...rest } = await fakeAuth({ accessToken });
				setUser(rest);
				setAccessToken(returnedAccessToken);
				setIsLoadingUser(false);
			} else {
				setIsLoadingUser(false);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const userValue = useMemo((): ContextType<typeof AuthContext> => {
		return {
			user,
			login: async ({ email, password, redirectTo = '/' }) => {
				setIsLoadingUser(true);
				const { accessToken, ...rest } = await fakeAuth({ email, password });
				setUser(rest);
				setAccessToken(accessToken);
				setIsLoadingUser(false);
				history.push(redirectTo);
			},
			logout: () => {
				setUser(null);
				removeAccessToken();
				setIsLoadingUser(false);
				history.push('/login');
			},
		};
	}, [user, setUser, history, setAccessToken, removeAccessToken]);

	const [showAlert, setShowAlert] = useState(false);

	return (
		<AuthContext.Provider value={userValue}>
			{todo && <div>{todo.title}</div>}
			<div className="min-h-screen flex flex-col">
				<Header className="flex-shrink-0" />

				<button
					onClick={() => {
						setShowAlert(!showAlert);
					}}
				>
					Toggle alert
				</button>
				<div className="bg-primary h-2"></div>
				<div className="bg-otherPrimary h-2"></div>

				<div className="bg-primary-light h-2"></div>
				<div className="bg-otherPrimary-light h-2"></div>

				<div className="bg-primary-dark h-2"></div>
				<div className="bg-otherPrimary-dark h-2"></div>
				{showAlert && (
					<Alert
						heading="Hi there"
						type="primary"
						onClose={() => {
							setShowAlert(false);
						}}
					>
						Hey there
						<Heading styleLevel={1}>This should be an h1</Heading>
						<HeadingLevel>
							<Heading styleLevel={2}>This should be an h2</Heading>
						</HeadingLevel>
					</Alert>
				)}

				<div className="flex-grow flex">
					{user && <Sidebar className="flex-shrink-0 w-20" />}
					{isLoadingUser ? (
						<Overlay>
							<Spinner />
						</Overlay>
					) : (
						<Main className="flex-grow" />
					)}
				</div>

				<Footer className="flex-shrink-0" />
			</div>
		</AuthContext.Provider>
	);
}

async function fakeAuth({
	accessToken,
	email,
}:
	| { email?: never; password?: never; accessToken: string }
	| { email: string; password: string; accessToken?: never }): Promise<
	UserData & {
		accessToken: string;
	}
> {
	return new Promise((resolve) =>
		setTimeout(() => {
			if (accessToken) {
				resolve({ email: 'youraccesstoken@accesstoken.com', accessToken });
			} else if (email) {
				resolve({ email, accessToken: 'newAccessToken' });
			}
		}, 1000),
	);
}
