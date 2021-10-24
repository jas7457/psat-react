import React from 'react';
import type { Location } from 'history';

const AuthContext = React.createContext<{
	user: UserData | null;
	login: (props: {
		email: string;
		password: string;
		redirectTo: Location | string | undefined;
	}) => void;
	logout: () => void;
}>(null!);

export default AuthContext;

export interface UserData {
	email: string;
}
