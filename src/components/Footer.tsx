import clsx from 'clsx';

export default function Footer({ className }: { className?: string }) {
	return <footer className={clsx(className, 'text-center')}>Confidential and Propietary</footer>;
}
