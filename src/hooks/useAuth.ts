import { useContext, ContextType } from 'react';
import AuthContext from '~/contexts/AuthContext';

type AuthType = ContextType<typeof AuthContext>;

/**
 * The default hook when you know you have a user
 */
export default function useAuth(): NonNullable<AuthType> {
	const ret = useContext(AuthContext);
	if (!ret) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	if (!ret.user) {
		throw new Error(
			'You tried using useAuth without a user set. If your component isn\'t guaranteed to have a user, use "useUnsafeAuth" and check auth.user',
		);
	}
	return ret;
}

/**
 * A hook when you don't know if you have a user for sure
 */
export function useUnsafeAuth(): AuthType {
	return useContext(AuthContext);
}
