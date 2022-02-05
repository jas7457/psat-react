import clsx from 'clsx';

import { useUnsafeAuth } from '~/hooks/useAuth';
import Button from '~/components/style-guide/button/Button';
import Link from '~/components/style-guide/link/Link';

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
							<Link color="primary" to="/" linkStyle="underline">
								Home
							</Link>
							<Link color="primary" linkStyle="underline" to="/about">
								About
							</Link>
						</>
					)}
				</div>
				{auth.user && <Button onClick={auth.logout}>Sign out</Button>}
			</div>
		</header>
	);
}
