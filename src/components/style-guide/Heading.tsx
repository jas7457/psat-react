import React, { useContext } from 'react';
import clsx from 'clsx';

import HeadingContext from '../../contexts/HeadingContext';

/**
 * A component to automatically figure out the correct heading level based on React Context
 * You need to supply the "styleLevel" to make it visually appear how you like
 */
export default function Heading({ styleLevel, children, className, ...rest }: HeadingProps) {
	const headingLevel = useContext(HeadingContext);
	const HeadingComponent = `h${headingLevel}` as const;

	const styleClass = clsx({
		'heading-1': styleLevel === 1,
		'heading-2': styleLevel === 2,
		'heading-3': styleLevel === 3,
		'heading-4': styleLevel === 4,
		'heading-5': styleLevel === 5,
		'heading-6': styleLevel === 6,
	});

	return (
		<HeadingComponent data-component="heading" className={clsx(className, styleClass)} {...rest}>
			{children}
		</HeadingComponent>
	);
}

/**
 * Wrap this around a component that you want to introduce a new heading level scope to
 * All <Heading> components inside will be rendered heading level + 1 inside of it
 */
export function HeadingLevel({ children }: { children: React.ReactNode }) {
	const currentLevel = useContext(HeadingContext);
	const nextLevel = Math.min(6, currentLevel + 1) as 1 | 2 | 3 | 4 | 5 | 6;

	return <HeadingContext.Provider value={nextLevel}>{children}</HeadingContext.Provider>;
}

export interface HeadingProps extends React.PropsWithoutRef<JSX.IntrinsicElements['h1']> {
	styleLevel: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
}
