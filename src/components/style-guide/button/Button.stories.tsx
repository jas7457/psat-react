import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import Link from '../link/Link';

export default {
	title: 'Style Guide/Button',
	component: Button,
	argTypes: {
		color: { defaultValue: 'primary' },
		buttonStyle: { defaultValue: 'outline' },
		size: { defaultValue: 'medium' },
		shape: { defaultValue: 'normal' },
		disabled: { control: { type: 'boolean' }, defaultValue: false },
		as: { control: false },
	},
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof Button> = (args: ButtonProps<'button'>) => (
	<Button {...args} />
);

export const NormalButton = Template.bind({});
NormalButton.args = {
	children: 'Button',
	onClick: () => alert('You clicked the button, WOW'),
};

export const LinkButton = (args: ButtonProps<typeof Link>) => {
	return (
		<div className="space-y-4">
			<p>
				You can style Links (the Link component) the same as you'd style a button. Simply use the{' '}
				<code>as</code> prop to change it to <code>Link</code>.
			</p>
			<p>
				TypeScript is also smart enough to know that you can't pass a <code>to</code> prop to the{' '}
				<code>Button</code> component unless you specify <code>as={`<Link>`}</code>.
			</p>
			<Button {...args} />
		</div>
	);
};
LinkButton.args = {
	children: 'Link',
	as: Link,
	to: '/?path=/story/style-guide-button--normal-button',
	target: '_blank',
};

export const AnchorButton = (args: ButtonProps<typeof Link>) => {
	return (
		<div className="space-y-4">
			<p>
				If you want to use an anchor tag, you can use the <code>as={`{Link}`}</code> prop along with{' '}
				<code>href</code> instead of <code>to</code>. This will render a normal anchor instead of a
				React Router Link.
			</p>
			<Button {...args} />
		</div>
	);
};
AnchorButton.args = {
	children: 'Anchor',
	as: Link,
	href: 'https://www.google.com',
	target: '_blank',
};
