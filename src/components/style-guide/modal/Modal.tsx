import React, { useRef } from 'react';
import clsx from 'clsx';

import Button from '../button/Button';
import Overlay from '../overlay/Overlay';
import useClickOutside from '../../../hooks/useClickOutside';
import useEventListener from '../../../hooks/useEventListener';
import Card from '../card/Card';

// also export the related Modal components for easier imports elsewhere
export { default as ModalHeader, ModalTitle, ModalSubTitle } from './ModalHeader';
export { default as ModalBody } from './ModalBody';
export { default as ModalFooter } from './ModalFooter';

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

export interface ModalProps {
	children: React.ReactNode;

	/** Passing in an onClose is what adds the X button. If you don't want your Modal to be closeable, don't pass this prop. */
	onClose?: (closeReason: 'clickOutside' | 'clickCloseButton' | 'hitEscape') => void;
	className?: string;
}
