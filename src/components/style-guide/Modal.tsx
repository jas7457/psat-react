import React, { useRef } from 'react';
import clsx from 'clsx';

import Button from './Button';
import Overlay from './Overlay';
import useClickOutside from '../../hooks/useClickOutside';
import useEventListener from '../../hooks/useEventListener';
import Card from './Card';

export default function Modal({ onClose, children, className, ...rest }: ModalProps) {
	// close if they click outside
	const modalRef = useRef<HTMLDivElement | null>(null);
	useClickOutside(modalRef, () => onClose?.('clickOutside'));

	// close if they press escape
	useEventListener(
		'keydown',
		(e) => {
			if (e.key === 'Escape') {
				onClose?.('hitEscape');
			}
		},
		{ element: window },
	);

	return (
		<Overlay>
			<Card
				{...rest}
				data-component="modal"
				className={clsx(className, 'max-w-full mx-8 w-[480px] p-4')}
				role="dialog"
				aria-modal="true"
				ref={modalRef}
			>
				{onClose && (
					<Button
						onClick={() => onClose('clickCloseButton')}
						buttonStyle="link"
						size="small"
						className="float-right"
					>
						X
					</Button>
				)}
				<div className="space-y-8">{children}</div>
			</Card>
		</Overlay>
	);
}

export function ModalHeader({ children, ...rest }: ModalSubComponentProps) {
	return (
		<div data-component="modal-header" {...rest}>
			{children}
		</div>
	);
}

export function ModalBody({ children, ...rest }: ModalSubComponentProps) {
	return (
		<div data-component="modal-body" {...rest}>
			{children}
		</div>
	);
}

export function ModalFooter({ children, className, ...rest }: ModalSubComponentProps) {
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

interface ModalSubComponentProps {
	children: React.ReactNode;
	className?: string;
}

export interface ModalProps {
	/** Passing in an onClose is what adds the X button. If you don't want your Modal to be closeable, don't pass this prop. */
	onClose?: (closeReason: 'clickOutside' | 'clickCloseButton' | 'hitEscape') => void;
	className?: string;
	children: React.ReactNode;
}
