import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import Button from 'components/style-guide/button/Button';
import Link from 'components/style-guide/link/Link';
import { useUnsafeAuth } from 'hooks/useAuth';
import type { Location } from 'history';
import Card from 'components/style-guide/card/Card';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const location = useLocation<{ from?: Location } | null>();

	const { user, login } = useUnsafeAuth();

	// if we're already logged in, redirect to the home page
	if (user) {
		return <Redirect to={{ pathname: '/' }} />;
	}

	return (
		<div className="max-w-xl mx-auto">
			<div className="flex items-center space-x-4">
				<span className="text-xl font-semibold">Sign In</span>
				<span className="text-gray-400">Security Education Platform</span>
			</div>

			<Card className="p-4">
				<div>Proofpoint logo</div>

				<hr className="my-4 border-gray-300" />

				<form
					className="space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						if (!email || !password) {
							return;
						}
						login({ email, password, redirectTo: location.state?.from });
					}}
				>
					<FormInput label="Email Address" icon="icon" value={email} onSetValue={setEmail} />
					<FormInput
						label="Password"
						type="password"
						icon="icon"
						value={password}
						onSetValue={setPassword}
					/>

					<Button buttonStyle="fill" color="primary" type="submit" className="w-full">
						Submit
					</Button>
				</form>

				<hr className="my-4 border-gray-300" />

				<div className="text-center">
					<Link to="/logout">Forgot your password?</Link>
				</div>
			</Card>
		</div>
	);
}

function FormInput({
	label,
	type = 'text',
	icon,
	value,
	onSetValue,
}: {
	label: string;
	type?: 'text' | 'password';
	icon: string;
	value: string;
	onSetValue: (value: string) => void;
}) {
	return (
		<label className="block">
			{label}
			<div className="flex border items-center focus-within:border-primary rounded-sm">
				<span className="flex-shrink-0 px-2">{icon}</span>
				<input
					className="flex-grow focus-visible:outline-none py-2"
					value={value}
					type={type}
					onChange={(e) => onSetValue(e.target.value)}
				/>
			</div>
		</label>
	);
}
