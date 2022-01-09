import { useState } from 'react';

import Filter, {
	FilterCategoryList,
	FilterCategoryListItem,
	FilterCategoryListItemProps,
	FilterPanel,
	FilterPanelItem,
	FilterPanelItemProps,
} from './Filter';

export default function useFilters(
	initialState: Array<
		Omit<FilterCategoryListItemProps, 'onClick'> & {
			panelItems: Array<Omit<FilterPanelItemProps, 'onClick'>>;
		}
	>,
) {
	const [filterState, setFilterState] = useState(initialState);
	const selectedPanel = filterState.find((category) => category.isSelected);

	const getCategoryListItemProps = (
		categoryListItem: typeof initialState[number],
	): FilterCategoryListItemProps => {
		return {
			...categoryListItem,
			onClick: () => {
				setFilterState(
					filterState.map((listItem) => {
						if (listItem === categoryListItem) {
							if (categoryListItem.isSelected) {
								return listItem;
							}

							return { ...listItem, isSelected: !listItem.isSelected };
						}

						if (listItem.isSelected) {
							return { ...listItem, isSelected: false };
						}

						return listItem;
					}),
				);
			},
		};
	};

	const getPanelItemProps = (
		panelItem: Omit<FilterPanelItemProps, 'onClick'>,
	): FilterPanelItemProps => {
		return {
			...panelItem,
			onClick: () => {
				setFilterState(
					filterState.map((item) => {
						return {
							...item,
							panelItems: item.panelItems.map((panel) => {
								if (panel === panelItem) {
									return { ...panel, isSelected: !panel.isSelected };
								}
								return panel;
							}),
						};
					}),
				);
			},
		};
	};

	return {
		filterState,
		setFilterState,
		selectedPanel,
		getCategoryListItemProps,
		getPanelItemProps,
		Render: () => {
			return (
				<Filter>
					<FilterCategoryList>
						{filterState.map((filter, index) => (
							<FilterCategoryListItem key={index} {...getCategoryListItemProps(filter)} />
						))}
					</FilterCategoryList>

					{selectedPanel && (
						<FilterPanel>
							{selectedPanel.panelItems.map((filter, index) => (
								<FilterPanelItem key={index} {...getPanelItemProps(filter)} />
							))}
						</FilterPanel>
					)}
				</Filter>
			);
		},
	};
}
