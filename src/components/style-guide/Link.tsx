import clsx from 'clsx';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

import { Colors, getColor } from 'util/getColors';

export default function Link({ children, color = 'primary', className, ...rest }: LinkProps) {
	return (
		<ReactRouterLink
			data-component="link"
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

type LinkProps = ReactRouterLinkProps & {
	color?: Colors;
};
