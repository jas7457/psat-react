import React from 'react';
import clsx from 'clsx';

import assertNever from '../../util/assertNever';
import { getBgColor, getBorderColor } from '../../util/getColors';

/**
 * Typical buttons with some constraints.
 */
export default function Button({
	children,
	color = 'primary',
	buttonStyle = 'outline',
	size = 'medium',
	disabled = false,
	shape = 'normal',
	className,
	...rest
}: ButtonProps) {
	const buttonStyleClasses: string[] = (() => {
		const classes: string[] = [];

		switch (buttonStyle) {
			case 'link':
			case 'outline':
				if (buttonStyle === 'outline') {
					classes.push('border-current');
				} else {
					classes.push('border-transparent');
				}

				if (disabled) {
					return [...classes, 'text-gray-300 cursor-default'];
				}

				classes.push('hover:bg-opacity-10 focus:bg-opacity-10');
				switch (color) {
					case 'primary':
						return [...classes, 'text-primary hover:bg-primary-light focus:bg-primary-light'];
					case 'secondary':
						return [...classes, 'text-secondary hover:bg-secondary-light focus:bg-secondary-light'];
					case 'warning':
						return [...classes, 'text-warning hover:bg-warning-light focus:bg-warning-light'];
					case 'danger':
						return [...classes, 'text-danger hover:bg-danger-light focus:bg-danger-light'];
					default:
						return assertNever(color);
				}

			case 'fill':
				if (disabled) {
					return [...classes, 'text-gray-400 bg-gray-300 cursor-default border-gray-300'];
				}

				return [
					...classes,
					'text-white hover:bg-opacity-95',
					getBgColor(color),
					getBorderColor(color),
				];
		}
	})();

	const sizeClasses: string[] = (() => {
		switch (size) {
			case 'small':
				return ['text-xs py-1 px-2'];
			case 'medium':
				return ['text-base py-1 px-3'];
			case 'large':
				return ['text-lg py-1 px-4'];
			default:
				return assertNever(size);
		}
	})();

	const shapeClasses: string[] = (() => {
		switch (shape) {
			case 'normal':
				return [];
			case 'pill':
				return ['rounded-full'];
			default:
				return assertNever(shape);
		}
	})();

	return (
		<button
			className={clsx(
				className,
				'uppercase',
				'border',
				buttonStyleClasses,
				sizeClasses,
				shapeClasses,
			)}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
}

interface ButtonProps extends React.PropsWithoutRef<JSX.IntrinsicElements['button']> {
	/** The color for the button */
	color?: 'primary' | 'secondary' | 'warning' | 'danger';

	/** The button style */
	buttonStyle?: 'fill' | 'outline' | 'link';

	/** The size of the button */
	size?: 'small' | 'medium' | 'large';

	/** The shape of the button */
	shape?: 'normal' | 'pill';
	children: React.ReactNode;
}
