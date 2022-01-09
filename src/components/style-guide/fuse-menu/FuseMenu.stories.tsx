import { ComponentMeta } from '@storybook/react';
import Link from '../link/Link';
import Card from '../card/Card';

import FuseMenu, { FuseMenuItem } from './FuseMenu';

export default {
	title: 'Style Guide/FuseMenu',
	component: FuseMenu,
	argTypes: {
		children: { control: false },
	},
	subcomponents: { FuseMenuItem },
} as ComponentMeta<typeof FuseMenu>;

export const ExampleFuseMenu = () => {
	return (
		<FuseMenu>
			<FuseMenuItem>Plain text</FuseMenuItem>
			<FuseMenuItem disabled>Disabled plain text</FuseMenuItem>

			<FuseMenuItem as="button" onClick={() => alert('You clicked it!')}>
				A button
			</FuseMenuItem>
			<FuseMenuItem as="button" disabled onClick={() => alert('You clicked it!')}>
				A disabled button
			</FuseMenuItem>

			<FuseMenuItem as={Link} color="warning" to="/" target="_blank">
				A link
			</FuseMenuItem>
			<FuseMenuItem as={Link} to="/" disabled>
				A disabled link
			</FuseMenuItem>
		</FuseMenu>
	);
};

export const FuseMenuWithCard = () => {
	return (
		<Card>
			<FuseMenu>
				<FuseMenuItem>Plain text</FuseMenuItem>
				<FuseMenuItem disabled>Disabled plain text</FuseMenuItem>

				<FuseMenuItem as="button" onClick={() => alert('You clicked it!')}>
					A button
				</FuseMenuItem>
				<FuseMenuItem as="button" disabled onClick={() => alert('You clicked it!')}>
					A disabled button
				</FuseMenuItem>

				<FuseMenuItem as={Link} color="warning" to="/" target="_blank">
					A link
				</FuseMenuItem>
				<FuseMenuItem as={Link} to="/" disabled>
					A disabled link
				</FuseMenuItem>
			</FuseMenu>
		</Card>
	);
};
