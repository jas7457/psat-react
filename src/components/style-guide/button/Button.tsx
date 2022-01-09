import React from 'react';
import clsx from 'clsx';

import assertNever from '../../../util/assertNever';
import { getBgColor, getBorderColor } from '../../../util/getColors';
import { PolymorphicAs } from 'types/utils';
import Link from '../link/Link';

/**
 * Typical buttons with some guard rails.
 */
export default function Button<TButtonElement extends ButtonElement = 'button'>({
	children,
	color = 'primary',
	buttonStyle = 'outline',
	size = 'medium',
	shape = 'default',
	disabled = false,
	as,
	className,
	...rest
}: ButtonProps<TButtonElement>) {
	const buttonStyleClasses: string[] = (() => {
		const classes: string[] = [];

		switch (buttonStyle) {
			case 'link':
			case 'outline':
				classes.push('hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-20');

				if (buttonStyle === 'outline') {
					classes.push('border-current');
				} else {
					classes.push('border-transparent');
				}

				if (disabled) {
					return [...classes, 'text-gray-300'];
				}

				switch (color) {
					case 'primary':
						return [
							...classes,
							'text-primary hover:bg-primary-light focus:bg-primary-light active:text-primary-dark',
						];
					case 'secondary':
						return [
							...classes,
							'text-secondary hover:bg-secondary-light focus:bg-secondary-light active:text-secondary-dark',
						];
					case 'warning':
						return [
							...classes,
							'text-warning hover:bg-warning-light focus:bg-warning-light active:text-warning-dark',
						];
					case 'danger':
						return [
							...classes,
							'text-danger hover:bg-danger-light focus:bg-danger-light active:text-danger-dark',
						];
					case 'success':
						return [
							...classes,
							'text-success hover:bg-success-light focus:bg-success-light active:text-success-dark',
						];
					default:
						return assertNever(color);
				}

			case 'fill':
				classes.push('hover:bg-opacity-95 focus:bg-opacity-95 active:bg-opacity-90');
				if (disabled) {
					return [...classes, 'text-gray-400 bg-gray-300 border-gray-300'];
				}

				return [...classes, 'text-white', getBgColor(color), getBorderColor(color)];
			default:
				return assertNever(buttonStyle);
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
			case 'default':
				return [];
			case 'pill':
				return ['rounded-full'];
			default:
				return assertNever(shape);
		}
	})();

	const Component = as || 'button';

	return (
		<Component
			data-component="button"
			{...(Component === 'button' ? { disabled } : {})}
			{...(disabled && { tabIndex: -1 })}
			className={clsx(
				className,
				'justify-center',
				'inline-flex',
				'uppercase',
				'border',
				'focus:outline-dashed outline outline-current -outline-offset-1',
				{ 'cursor-default pointer-events-none': disabled },
				buttonStyleClasses,
				sizeClasses,
				shapeClasses,
			)}
			{...(rest as PolymorphicAs<typeof Component> as any)}
		>
			{children}
		</Component>
	);
}

type ButtonElement = typeof Link | 'button' | 'a';
export type ButtonProps<TButtonElement extends ButtonElement> = {
	children: React.ReactNode;

	/** The color for the button */
	color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'success';

	/** The button style */
	buttonStyle?: 'fill' | 'outline' | 'link';

	/** The size of the button */
	size?: 'small' | 'medium' | 'large';

	/** The shape of the button */
	shape?: 'default' | 'pill';

	/** Whether the button is disabled */
	disabled?: boolean;
} & PolymorphicAs<TButtonElement>;
