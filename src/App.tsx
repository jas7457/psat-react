import { useMemo } from 'react';

import { useHistory } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';

import AuthContext from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
	const [user, setUser] = useLocalStorage<{ email: string; password: string } | null>('user', null);
	const history = useHistory();

	const userValue = useMemo(() => {
		return {
			user,
			login: ({ email, password, to = '/' }: { email: string; password: string; to?: string }) => {
				setUser({ email, password });
				history.push(to);
			},
			logout: () => {
				setUser(null);
				history.push('/login');
			},
		};
	}, [user, setUser, history]);

	return (
		<AuthContext.Provider value={userValue}>
			<div className="min-h-screen flex flex-col">
				<Header className="flex-shrink-0" />
				<Main className="flex-grow" />
				<Footer className="flex-shrink-0" />
			</div>
		</AuthContext.Provider>
	);
}
