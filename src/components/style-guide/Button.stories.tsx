import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Button, { ButtonProps } from './Button';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		color: { defaultValue: 'primary' },
		buttonStyle: { defaultValue: 'outline' },
		size: { defaultValue: 'medium' },
		shape: { defaultValue: 'normal' },
		disabled: { control: { type: 'boolean' }, defaultValue: false },
		as: { control: { type: 'select', options: ['button', 'a'] }, defaultValue: 'button' },
	},
	decorators: [
		(Story) => (
			<Router>
				<Story />
			</Router>
		),
	],
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

export const LinkButton = (args: ButtonProps<'link'>) => {
	return (
		<div className="space-y-4">
			<p>
				You can style Links (React Router Links) the same as you'd style a button. Simply use the{' '}
				<code>as</code> prop to change it to <code>Link</code>.
			</p>
			<p>
				TypeScript is also smart enough to know that you can't pass an <code>to</code> to the{' '}
				<code>Button</code> component unless you specify <code>as="link"</code>.
			</p>
			<Button {...args} />
		</div>
	);
};
LinkButton.args = {
	children: 'Link',
	as: 'link',
	to: '/?path=/story/example-button--normal-button',
	target: '_blank',
};

export const AnchorButton = (args: ButtonProps<'link'>) => {
	return (
		<div className="space-y-4">
			<p>
				If you want to use an anchor tag, you can use the <code>as="a"</code> prop. This is helpful
				for external links that React Router can't handle.
			</p>
			<p>
				Use an <code>href</code> just like you would for a normal anchor.
			</p>
			<Button {...args} />
		</div>
	);
};
AnchorButton.args = {
	children: 'Anchor',
	as: 'a',
	href: 'https://www.google.com',
	target: '_blank',
};
