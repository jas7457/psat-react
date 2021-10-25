import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading, { HeadingLevel, HeadingProps } from './Heading';

const oneThroughSix = Array.from({ length: 6 }, (_val, index) => index + 1);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Heading',
	component: Heading,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		styleLevel: { control: { type: 'select', options: oneThroughSix }, defaultValue: 1 },
	},
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => <Heading {...args} />;

export const NormalHeading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalHeading.args = {
	children: 'Heading',
};

export const NestedHeadings = () => {
	return (
		<>
			<p>
				You can dynamically set the heading level to increment for children. This helps with
				accessibility, as you should not have an h6 followed by an h1. Simply wrap your content with
				the <code>{`<HeadingLevel />`}</code> component.
			</p>
			<Heading styleLevel={1}>I am an h1</Heading>
			<HeadingLevel>
				<Heading styleLevel={1}>I am an h2, styled to look like an h1</Heading>
				<HeadingLevel>
					<Heading styleLevel={5}>I am an h3, styled to look like an h5</Heading>
				</HeadingLevel>
			</HeadingLevel>
		</>
	);
};

NestedHeadings.args = {};
NestedHeadings.parameters = {
	controls: { disable: true },
};
