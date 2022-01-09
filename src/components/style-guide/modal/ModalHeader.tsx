import clsx from 'clsx';
import { ModalSubComponentProps } from './types';

export default function ModalHeader({ children, ...rest }: ModalSubComponentProps) {
	return (
		<div data-component="modal-header" {...rest}>
			{children}
		</div>
	);
}

export function ModalTitle({ children, className, ...rest }: ModalSubComponentProps) {
	return (
		<h1 data-component="modal-title" className={clsx(className, 'heading-4')} {...rest}>
			{children}
		</h1>
	);
}

export function ModalSubTitle({ children, className, ...rest }: ModalSubComponentProps) {
	return (
		<h2
			data-component="modal-sub-title"
			className={clsx(className, 'heading-5 text-gray-600')}
			{...rest}
		>
			{children}
		</h2>
	);
}
