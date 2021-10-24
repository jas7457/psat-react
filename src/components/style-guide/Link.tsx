import clsx from 'clsx';
import { Colors, getColor } from '../../util/getColors';

export default function Link({ children, href, color = 'primary', className, ...rest }: LinkProps) {
	return (
		<a
			href={href}
			className={clsx(
				className,
				getColor(color),
				'border-b border-transparent hover:border-current',
			)}
			{...rest}
		>
			{children}
		</a>
	);
}

interface LinkProps extends React.PropsWithoutRef<JSX.IntrinsicElements['a']> {
	children: React.ReactNode;
	href: string;
	color?: Colors;
}
