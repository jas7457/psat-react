import { ModalSubComponentProps } from './types';

export default function ModalBody({ children, ...rest }: ModalSubComponentProps) {
	return (
		<div data-component="modal-body" {...rest}>
			{children}
		</div>
	);
}
