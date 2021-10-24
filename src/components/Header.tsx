import clsx from 'clsx';

import useAuth from 'hooks/useAuth';
import Button from 'components/style-guide/Button';

export default function Header({ className }: { className?: string }) {
	const auth = useAuth();

	return (
		<header className={clsx(className, 'shadow-md py-2 px-4')}>
			<div className="flex justify-between">
				<div className="flex items-center space-x-2">
					<span>Image</span>{' '}
					<span className="text-xl font-medium">Security Education Platform</span>
				</div>
				{auth.user && <Button onClick={auth.logout}>Sign out</Button>}
			</div>
		</header>
	);
}
