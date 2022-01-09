import ReactDOM from 'react-dom';

export default function Overlay({ children }: { children: React.ReactNode }) {
	return ReactDOM.createPortal(
		<div
			data-component="overlay"
			className="bg-gray-600 bg-opacity-75 fixed inset-0 z-10 flex items-center justify-center"
		>
			<div>{children}</div>
		</div>,
		document.body,
	);
}
