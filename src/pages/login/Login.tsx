import { useState } from 'react';
import { Redirect, useLocation } from 'react-router';

import Button from '../../components/style-guide/Button';
import Link from '../../components/style-guide/Link';
import useAuth from '../../hooks/useAuth';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const location = useLocation<{ from?: string } | null>();

	const { user, login } = useAuth();

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

			<div className="bg-white p-4 shadow-lg">
				<div>Proofpoint logo</div>

				<hr className="my-4 border-gray-300" />

				<form
					className="space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						login({ email, password, redirectTo: location.state?.from ?? '/' });
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
					<Link href="/logout">Forgot your password?</Link>
				</div>
			</div>
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