import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useUnsafeAuth } from 'hooks/useAuth';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
	const { user } = useUnsafeAuth();

	return (
		<Route
			{...rest}
			render={({ location }) => {
				return user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							// put the state of the location so we can return to this page from the Login component
							state: { from: location },
						}}
					/>
				);
			}}
		/>
	);
}
