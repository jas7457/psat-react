import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Alert from './Alert';
import Button from './Button';

export default {
	title: 'Example/Alert',
	component: Alert,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		onClose: { control: false, defaultValue: undefined, action: { disable: true } },
		type: { defaultValue: 'primary' },
	},
	parameters: {
		componentSubtitle: 'A component for displaying alerts.',
		actions: { disable: true },
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const CloseableAlert = Template.bind({});
CloseableAlert.args = {
	children: 'Alert',
	onClose: () => {
		alert('You clicked close!');
	},
};

export const NonCloseableAlert = Template.bind({});
NonCloseableAlert.args = {
	children: 'Alert',
	type: 'danger',
};

export const AlertWithHeading = Template.bind({});
AlertWithHeading.args = {
	children: (
		<>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<div>Put whatever type of children you'd like</div>{' '}
			<Button size="small">You can put whatever in here</Button>
		</>
	),
	heading: 'Heading',
};

export const FullStory: ComponentStory<typeof Alert> = () => {
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	return (
		<div className="space-y-4">
			<p>
				Typically, you'll show an <code>Alert</code> in reaction to some user interaction, like
				clicking a button. You'll use state to keep track of that, and can additionally close it by
				passing an <code>onClose</code> method into the <code>Alert</code>. If no{' '}
				<code>onClose</code> method is passed in, the X button will not appear.
			</p>
			<Button
				onClick={() => {
					setIsAlertOpen(!isAlertOpen);
				}}
			>
				Toggle alert
			</Button>

			{isAlertOpen && (
				<Alert
					type="warning"
					heading="Heading"
					onClose={() => {
						setIsAlertOpen(false);
					}}
				>
					Alert
				</Alert>
			)}
		</div>
	);
};

FullStory.storyName = 'Showing/hiding Alerts';
FullStory.parameters = {
	controls: { disable: true },
};
