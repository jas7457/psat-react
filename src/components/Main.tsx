import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// lazy load all pages
const FourOFour = React.lazy(() => import('pages/fourofour/FourOFour'));
const Home = React.lazy(() => import('pages/home/Home'));
const Login = React.lazy(() => import('pages/login/Login'));
const About = React.lazy(() => import('pages/about/About'));

import Spinner from 'components/style-guide/Spinner';
import Overlay from 'components/style-guide/Overlay';
import PrivateRoute from 'components/PrivateRoute';

export default function Main({ className }: { className?: string }) {
	return (
		<main className={className}>
			<Suspense
				fallback={
					<Overlay>
						<Spinner />
					</Overlay>
				}
			>
				<Switch>
					<PrivateRoute exact path="/">
						<Home />
					</PrivateRoute>
					<PrivateRoute exact path="/about">
						<About />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route path="*">
						<FourOFour />
					</Route>
				</Switch>
			</Suspense>
		</main>
	);
}
