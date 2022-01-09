import { Navigate, useLocation } from 'react-router-dom';

import { useUnsafeAuth } from 'hooks/useAuth';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
	const { user } = useUnsafeAuth();

	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}
