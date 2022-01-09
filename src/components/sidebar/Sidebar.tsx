import clsx from 'clsx';

export default function Sidebar({ className }: { className?: string }) {
	return <aside className={clsx(className, 'w-56 bg-gray-800 text-white')}>I'm the sidebar</aside>;
}
