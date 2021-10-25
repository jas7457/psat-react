import clsx from 'clsx';

import { useUnsafeAuth } from 'hooks/useAuth';
import Button from 'components/style-guide/Button';
import Link from 'components/style-guide/Link';

export default function Header({ className }: { className?: string }) {
	const auth = useUnsafeAuth();

	return (
		<header className={clsx(className, 'shadow-md py-2 px-4')}>
			<div className="flex justify-between">
				<div className="flex items-center space-x-2">
					<span>Image</span>{' '}
					<span className="text-xl font-medium">Security Education Platform</span>
					{auth.user && (
						<>
							<Link to="/">Home</Link>
							<Link to="/about">About</Link>
						</>
					)}
				</div>
				{auth.user && <Button onClick={auth.logout}>Sign out</Button>}
			</div>
		</header>
	);
}
