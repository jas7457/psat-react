import React from 'react';
import clsx from 'clsx';

import Button, { ButtonProps } from './Button';
import { getBorderColor } from '../../util/getColors';
import Heading, { HeadingLevel } from './Heading';

/**
 * An alert to show the user
 */
export default function Alert({
	type = 'primary',
	onClose,
	heading,
	children,
	className,
	...rest
}: AlertProps) {
	console.log(onClose);
	return (
		<div
			className={clsx(
				className,
				'flex items-start p-2 border-t-2 bg-white rounded shadow-md',
				getBorderColor(type),
			)}
			{...rest}
		>
			<div className="flex-grow">
				{heading ? (
					<>
						<Heading styleLevel={4}>{heading}</Heading>
						<HeadingLevel>
							<div>{children}</div>
						</HeadingLevel>
					</>
				) : (
					children
				)}
			</div>

			{onClose && (
				<Button
					className="flex-shrink-0"
					color={type}
					buttonStyle="link"
					size="small"
					onClick={onClose}
				>
					X
				</Button>
			)}
		</div>
	);
}

interface AlertProps extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
	/** The alert type, which also sets the icon */
	type: ButtonProps['color'];

	/** Passing in an onClose is what adds the X button. If you don't want your alert to be closeable, don't pass this prop. */
	onClose?: React.MouseEventHandler<HTMLButtonElement>;

	/** Optional heading for the alert that uses the style level of 4. If you want a different looking heading, just use the children by itself */
	heading?: React.ReactNode;
	children: React.ReactNode;
}
