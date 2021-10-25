import React from 'react';
import clsx from 'clsx';

/**
 * A simple component that represents a card. It doesn't do much besides make the background white, add a border, and add a shadow.
 * Wrapped in a forwardRef so other components (namely Modal) can set a ref on it.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ children, className, ...rest }: CardProps, ref) => {
		return (
			<div
				ref={ref}
				data-component="card"
				className={clsx('bg-white rounded-sm shadow-md', className)}
				{...rest}
			>
				{children}
			</div>
		);
	},
);
Card.displayName = 'Search';

export default Card;

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
	className?: string;
}
