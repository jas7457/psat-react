import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		color: { defaultValue: 'primary' },
		buttonStyle: { defaultValue: 'outline' },
		size: { defaultValue: 'medium' },
		shape: { defaultValue: 'normal' },
		disabled: { control: { type: 'boolean' }, defaultValue: false },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ExampleButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExampleButton.args = {
	children: 'Button',
	onClick: () => alert('You clicked the button, WOW'),
};
