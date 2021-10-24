import { ContextType, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';

import AuthContext, { UserData } from './contexts/AuthContext';
import Spinner from 'components/style-guide/Spinner';
import useCookie from 'hooks/useCookie';
import Sidebar from 'components/Sidebar';
import Overlay from 'components/style-guide/Overlay';
import useFetch from 'hooks/useFetch';

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

	return (
		<AuthContext.Provider value={userValue}>
			{todo && <div>{todo.title}</div>}
			<div className="min-h-screen flex flex-col">
				<Header className="flex-shrink-0" />

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
