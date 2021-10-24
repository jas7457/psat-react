import { Switch, Route } from 'react-router-dom';

import FourOFour from '../pages/fourofour/FourOFour';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';

import PrivateRoute from '../components/PrivateRoute';

export default function Main({ className }: { className?: string }) {
	return (
		<main className={className}>
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
		</main>
	);
}
