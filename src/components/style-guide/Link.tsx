import clsx from 'clsx';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

import { Colors, getColor } from 'util/getColors';

export default function Link({ children, href, color = 'primary', className, ...rest }: LinkProps) {
	return (
		<ReactRouterLink
			to={href}
			className={clsx(
				className,
				getColor(color),
				'border-b border-transparent hover:border-current',
			)}
			{...rest}
		>
			{children}
		</ReactRouterLink>
	);
}

type LinkProps = Omit<ReactRouterLinkProps, 'to'> & {
	href: string;
	color?: Colors;
};
