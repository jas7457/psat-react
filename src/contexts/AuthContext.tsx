import React from 'react';

const UserContext = React.createContext<{
	user: { email: string; password: string } | null;
	login: (props: { email: string; password: string; redirectTo?: string }) => void;
	logout: () => void;
}>(null!);

export default UserContext;
