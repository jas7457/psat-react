export default function Overlay({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-gray-600 bg-opacity-10 fixed inset-0 flex items-center justify-center">
			<div>{children}</div>
		</div>
	);
}
