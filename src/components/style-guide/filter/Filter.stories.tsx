import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Filter, { useFilters } from './Filter';

export default {
	title: 'Style Guide/Filter',
	component: Filter,
	argTypes: {
		children: { control: false },
	},
} as ComponentMeta<typeof Filter>;

export const ExampleFilter = () => {
	const { Render } = useFilters([
		{
			children: 'Item 1',
			isSelected: true,
			panelItems: [
				{ children: 'Item 1.1', isSelected: false },
				{ children: 'Item 1.2', isSelected: false },
				{ children: 'Item 1.3', isSelected: false },
				{ children: 'Item 1.4', isSelected: false },
				{ children: 'Item 1.5', isSelected: false },
			],
		},
		{
			children: 'Item 2',
			isSelected: false,
			panelItems: [
				{ children: 'Item 2.1', isSelected: false },
				{ children: 'Item 2.2', isSelected: false },
			],
		},
		{
			children: 'Item 3',
			isSelected: false,
			panelItems: [
				{ children: 'Item 3.1', isSelected: false },
				{ children: 'Item 3.2', isSelected: false },
				{ children: 'Item 3.3', isSelected: false },
				{ children: 'Item 3.4', isSelected: false },
				{ children: 'Item 3.5', isSelected: false },
			],
		},
	]);

	return <Render />;
};
