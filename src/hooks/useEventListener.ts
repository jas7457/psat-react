import React, { useEffect, useRef } from 'react';

export default function useEventListener<
	TEventName extends keyof WindowEventMap,
	TElement extends HTMLElement | Window | Document = Document,
>(
	event: TEventName,
	handler: (event: WindowEventMap[TEventName]) => void,
	options?: {
		element?: typeof window | typeof document | React.MutableRefObject<TElement>;
	},
) {
	// Create a ref that stores handler so we don't continuously add/remove/add/remove event listeners
	const savedHandler = useRef(handler);
	savedHandler.current = handler;

	useEffect(() => {
		// Create event listener that calls handler function stored in ref
		const eventListener = (e: Event) => {
			savedHandler.current(e as unknown as WindowEventMap[TEventName]);
		};

		// Define the listening target
		const targetElement = (() => {
			if (!options?.element) {
				return document;
			}
			if ('current' in options.element) {
				return options.element.current ?? document;
			}
			return options.element;
		})();

		targetElement.addEventListener(event, eventListener);

		// Remove event listener on cleanup
		return () => {
			targetElement.removeEventListener(event, eventListener);
		};
	}, [event, options?.element]);
}
