import clsx from 'clsx';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

import { Colors, getColor } from '../../../util/getColors';

/**
 * Allows you to pass either "to" or "href" but not both. "to" is for react-router-dom, "href" is for anchors.
 */
export default function Link({
	children,
	color,
	linkStyle = 'none',
	className,
	to,
	href,
	...rest
}: LinkProps) {
	const classes = clsx(className, color ? { [getColor(color)]: color } : {}, {
		'border-b border-transparent hover:border-current': linkStyle === 'underline',
	});

	if (to) {
		return (
			<ReactRouterLink data-component="link" to={to} className={classes} {...rest}>
				{children}
			</ReactRouterLink>
		);
	}

	return (
		<a data-component="link" href={href} className={classes} {...rest}>
			{children}
		</a>
	);
}

export type LinkProps = ReactRouterLinkProps & {
	color?: Colors;
	linkStyle?: 'none' | 'underline';
	href?: string;
} & ({ href?: never; to: ReactRouterLinkProps['to'] } | { href: string; to?: never });
