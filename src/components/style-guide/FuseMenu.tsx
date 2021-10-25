import React from 'react';
import clsx from 'clsx';

export default function FuseMenu({ children, className, ...rest }: FuseMenuProps) {
	return (
		<ul data-component="fuse-menu" className={clsx(className, 'py-2 list-none')} {...rest}>
			{children}
		</ul>
	);
}

export interface FuseMenuProps {
	children: React.ReactNode;
	className?: string;
}

export function FuseMenuItem({ children, className, disabled, ...rest }: FuseMenuItemProps) {
	// pass the disabled prop down to children so the <Button> can be disabled if this item is disabled
	// also pass the w-full class so the children take up the full width of the item
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				disabled,
				...(disabled && { tabIndex: -1 }),
				className: clsx(
					'w-full text-left focus-visible:outline-none',
					{ 'text-gray-300': disabled },
					child.props.className,
				),
			});
		}

		return child;
	});

	return (
		<li
			data-component="fuse-menu-item"
			className={clsx(
				className,
				'min-h-[2rem] flex items-center px-3 hover:bg-gray-300 focus-within:bg-gray-300',
				{
					'pointer-events-none': disabled,
				},
			)}
			{...rest}
		>
			{childrenWithProps}
		</li>
	);
}

export interface FuseMenuItemProps {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
}
