import { useState } from 'react';

import Container from 'components/style-guide/container/Container';
import Heading, { HeadingLevel } from 'components/style-guide/heading/Heading';
import Button from 'components/style-guide/button/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalSubTitle,
	ModalTitle,
} from 'components/style-guide/modal/Modal';

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Container>
				<Heading styleLevel={1}>Home Page</Heading>
				<HeadingLevel>
					<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
				</HeadingLevel>
			</Container>

			{isModalOpen && (
				<Modal onClose={() => setIsModalOpen(false)}>
					<ModalHeader>
						<ModalTitle>Modal Title</ModalTitle>
						<ModalSubTitle>Modal Subtitle</ModalSubTitle>
					</ModalHeader>

					<ModalBody>Some body text</ModalBody>

					<ModalFooter>
						<Button color="primary" buttonStyle="fill" onClick={() => setIsModalOpen(false)}>
							Close
						</Button>
					</ModalFooter>
				</Modal>
			)}
		</>
	);
}
