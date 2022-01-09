import React from 'react';
import clsx from 'clsx';

import type { PolymorphicAs } from '../../../types/utils';

export default function FuseMenu({ children, className, ...rest }: FuseMenuProps) {
	return (
		<ul data-component="fuse-menu" className={clsx(className, 'list-none')} {...rest}>
			{children}
		</ul>
	);
}

export interface FuseMenuProps {
	children: React.ReactNode;
	className?: string;
}

export function FuseMenuItem<TItemElement extends ItemElement>({
	children,
	as,
	className,
	disabled = false,
	...rest
}: FuseMenuItemProps<TItemElement>) {
	const Component = as || 'div';
	return (
		<li
			data-component="fuse-menu-item"
			className={clsx(
				className,
				'min-h-[2rem] flex items-center px-3 hover:bg-gray-300 focus-within:bg-gray-300',
				{
					'pointer-events-none text-gray-300': disabled,
				},
			)}
		>
			<Component
				{...(as === 'button' && { disabled })}
				{...(disabled && { tabIndex: -1 })}
				className={clsx('w-full text-left focus-visible:outline-none', {
					'text-gray-300': disabled,
				})}
				{...rest}
			>
				{children}
			</Component>
		</li>
	);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ItemElement = React.ComponentType<any> | 'button' | 'div' | 'a';
export type FuseMenuItemProps<TItemElement extends ItemElement> = {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
} & PolymorphicAs<TItemElement>;
