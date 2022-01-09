import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid, { GridProps } from './Grid';

const oneThroughTwelve = Array.from({ length: 12 }, (_val, index) => index + 1);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Style Guide/Grid',
	component: Grid,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		columns: { control: { type: 'select', options: oneThroughTwelve }, defaultValue: 3 },
		smColumns: { control: { type: 'select', options: oneThroughTwelve } },
		mdColumns: { control: { type: 'select', options: oneThroughTwelve } },
		lgColumns: { control: { type: 'select', options: oneThroughTwelve } },
		xlColumns: { control: { type: 'select', options: oneThroughTwelve } },
		gap: { defaultValue: 'none' },
		children: { control: false },
	},
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args: GridProps) => <Grid {...args} />;

export const ExampleGrid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleGrid.args = {
	children: oneThroughTwelve.map((num) => (
		<div key={num} className="border text-center">
			{num}
		</div>
	)),
};
