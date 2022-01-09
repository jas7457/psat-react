import { ContextType, useEffect, useMemo, useState } from 'react';
import { useHistory, BrowserRouter as Router, Link } from 'react-router-dom';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Main from 'components/main/Main';

import AuthContext, { UserData } from 'contexts/AuthContext';
import Spinner from 'components/style-guide/spinner/Spinner';
import useCookie from 'hooks/useCookie';
import Sidebar from 'components/sidebar/Sidebar';
import Overlay from 'components/style-guide/overlay/Overlay';

export default function App() {
	const [accessToken, setAccessToken, removeAccessToken] = useCookie<string | null>(
		'access_token',
		null,
	);
	const [user, setUser] = useState<UserData | null>(null);
	const [isLoadingUser, setIsLoadingUser] = useState(true);

	const history = useHistory();

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

	const shouldShowSidebar = !!user;

	return (
		<Router>
			<AuthContext.Provider value={userValue}>
				<div className="min-h-screen flex flex-col">
					<Header className="flex-shrink-0" />
					<div className="flex-grow flex">
						{shouldShowSidebar && <Sidebar className="flex-shrink-0 w-20" />}
						{isLoadingUser ? (
							<Overlay>
								<Spinner />
							</Overlay>
						) : (
							<div className="flex-grow flex flex-col">
								<Main className="flex-grow" />
								{shouldShowSidebar && <Footer className="flex-shrink-0" />}
							</div>
						)}
					</div>

					{!shouldShowSidebar && <Footer className="flex-shrink-0" />}
				</div>
			</AuthContext.Provider>
		</Router>
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
