import { Route, Redirect, RouteProps } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children, ...rest }: RouteProps) {
	const { user } = useAuth();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							// put the state of the location so we can return to this page from the Login component
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
