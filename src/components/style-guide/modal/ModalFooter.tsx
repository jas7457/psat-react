import clsx from 'clsx';
import { ModalSubComponentProps } from './types';

export default function ModalFooter({ children, className, ...rest }: ModalSubComponentProps) {
	return (
		<div
			data-component="modal-footer"
			className={clsx(className, 'flex space-x-2 justify-end')}
			{...rest}
		>
			{children}
		</div>
	);
}
