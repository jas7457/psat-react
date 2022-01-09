import React from 'react';
import clsx from 'clsx';

export default function FilterPanel({
	children,
	className,
	...rest
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div data-component="filter-panel" className={clsx(className, 'flex-grow')} {...rest}>
			{children}
		</div>
	);
}

export function FilterPanelItem({
	children,
	className,
	isSelected,
	onClick,
	...rest
}: FilterPanelItemProps) {
	return (
		<div
			data-component="filter-panel"
			className={clsx(className, 'px-4 py-2 hover:bg-gray-100 cursor-pointer', {
				'bg-primary': isSelected,
			})}
			onClick={onClick}
			{...rest}
		>
			{children}
		</div>
	);
}

export interface FilterPanelItemProps {
	children: React.ReactNode;
	isSelected: boolean;
	onClick: () => void;
	className?: string;
}
