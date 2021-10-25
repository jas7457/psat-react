import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Button from './Button';

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalSubTitle, ModalTitle } from './Modal';

export default {
	title: 'Example/Modal',
	component: Modal,
	argTypes: {
		onClose: { control: false, defaultValue: undefined, action: { disable: true } },
	},
} as ComponentMeta<typeof Modal>;

export const CloseableModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [closeOn, setCloseOn] = useState({
		clickCloseButton: true,
		clickOutside: true,
		hitEscape: true,
	});

	return (
		<div className="space-y-4">
			<p>
				You can make your modal close in different ways. The onClose method receives why it was
				closed as an argument, and you can react accordingly.
			</p>

			<div>
				{Object.entries(closeOn).map(([key, value]) => (
					<div key={key}>
						<label>
							<input
								type="checkbox"
								checked={value}
								onChange={() => setCloseOn({ ...closeOn, [key]: !value })}
							/>{' '}
							Close on {key}
						</label>
					</div>
				))}
			</div>

			<Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
			{isModalOpen && (
				<Modal
					onClose={(reason) => {
						if (closeOn[reason]) {
							setIsModalOpen(false);
						}
					}}
				>
					<ModalHeader>
						<ModalTitle>Modal Title</ModalTitle>
						<ModalSubTitle>Modal Subtitle</ModalSubTitle>
					</ModalHeader>

					<ModalBody>You can put whatever you want in the body.</ModalBody>

					<ModalFooter>
						<Button buttonStyle="link" onClick={() => setIsModalOpen(false)}>
							Cancel
						</Button>
						<Button buttonStyle="fill" onClick={() => setIsModalOpen(false)}>
							Confirm
						</Button>
					</ModalFooter>
				</Modal>
			)}
		</div>
	);
};

CloseableModal.args = {
	modalBody: 'Modal',
};
