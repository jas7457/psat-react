import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import Button from '../button/Button';

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalSubTitle, ModalTitle } from './Modal';

export default {
	title: 'Style Guide/Modal',
	component: Modal,
	subcomponents: { ModalHeader, ModalTitle, ModalSubTitle, ModalBody, ModalFooter },
	argTypes: {
		onClose: { control: false, defaultValue: undefined, action: { disable: true } },
	},
} as ComponentMeta<typeof Modal>;

export const BasicModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	if (!isModalOpen) {
		return null;
	}

	return (
		<Modal>
			<ModalHeader>
				<ModalTitle>Modal Title</ModalTitle>
				<ModalSubTitle>Modal Subtitle</ModalSubTitle>
			</ModalHeader>

			<ModalBody className="space-y-4">
				<p>Here are some helpful hints for how to use the modal and its subcomponent</p>

				<ul className="list-disc pl-4">
					<li>
						Wrap the title and subtitle in a <code>ModalHeader</code> component.
					</li>
					<li>
						If you don't want either, simply don't use the <code>ModalHeader</code> component
					</li>
					<li>
						Wrap anything you want in the <code>ModalBody</code> component
					</li>
					<li>
						Put your action buttons in a <code>ModalFooter</code> component
					</li>
					<li>
						The <code>ModalHeader</code>, <code>ModalBody</code>, and <code>ModalFooter</code>{' '}
						components will automatically be spaced appropriately, along with your buttons inside of{' '}
						<code>ModalFooter</code>
					</li>
				</ul>
			</ModalBody>

			<ModalFooter>
				<Button buttonStyle="link" onClick={() => setIsModalOpen(false)}>
					Cancel
				</Button>
				<Button buttonStyle="fill" onClick={() => setIsModalOpen(false)}>
					Confirm
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export const CloseableModal: ComponentStory<typeof Modal> = () => {
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
