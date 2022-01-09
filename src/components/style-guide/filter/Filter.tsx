import React from 'react';
import clsx from 'clsx';

export { default as FilterCategoryList, FilterCategoryListItem } from './FilterCategoryList';
export type { FilterCategoryListItemProps } from './FilterCategoryList';
export { default as FilterPanel, FilterPanelItem } from './FilterPanel';
export type { FilterPanelItemProps } from './FilterPanel';
export { default as useFilters } from './useFilters';

export default function Filter({ children, className, ...rest }: FilterProps) {
	return (
		<div data-component="filter" className={clsx(className, 'flex items-start')} {...rest}>
			{children}
		</div>
	);
}

interface FilterProps {
	children: React.ReactNode;
	className?: string;
}
