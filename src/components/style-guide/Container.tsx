import React from 'react';
import clsx from 'clsx';

/**
 * A simple class meant to be used as a container for other components.
 * It simply sets some max-width to give the same width for pages
 */
export default function Container({ children, className, ...rest }: ContainerProps) {
	return (
		<div className={clsx(className, 'max-w-6xl', 'mx-auto')} {...rest}>
			{children}
		</div>
	);
}

interface ContainerProps extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
	children: React.ReactNode;
}
