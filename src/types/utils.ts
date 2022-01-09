import React from 'react';

export type PolymorphicAs<TItemElement extends React.ElementType> = {
	as?: TItemElement;
} & Omit<
	TItemElement extends keyof JSX.IntrinsicElements
		? JSX.IntrinsicElements[TItemElement]
		: React.ComponentProps<TItemElement>,
	'as'
>;
