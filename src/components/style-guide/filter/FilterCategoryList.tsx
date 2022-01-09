import React from 'react';
import clsx from 'clsx';

export default function FilterCategoryList({
	children,
	className,
	...rest
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<ol data-component="filter-category-list" className={clsx(className, 'w-1/3')} {...rest}>
			{children}
		</ol>
	);
}

export function FilterCategoryListItem({
	children,
	isSelected,
	className,
	onClick,
	...rest
}: FilterCategoryListItemProps) {
	return (
		<li
			data-component="filter-category-list-item"
			className={clsx(className, 'flex justify-between px-4 py-2', {
				'bg-primary text-white': isSelected,
				'bg-white text-primary hover:bg-gray-100 cursor-pointer': !isSelected,
			})}
			onClick={() => {
				onClick();
			}}
			{...rest}
		>
			<div>{children}</div>
			<div>＞</div>
		</li>
	);
}

export interface FilterCategoryListItemProps {
	children: React.ReactNode;
	isSelected: boolean;
	onClick: () => void;
	className?: string;
}
