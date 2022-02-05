import React from 'react';
import useEventListener from './useEventListener';

/**
 * A hook that sets up a listener for click events outside of the given element.
 */
export default function useClickOutside<T extends HTMLElement = HTMLElement>(
	ref: React.RefObject<T>,
	callback: (event: Event) => void,
): void {
	const handler = (event: Event) => {
		if (!ref.current || ref.current.contains(event.target as Node)) {
			return;
		}

		callback(event);
	};

	useEventListener('mousedown', handler);
	useEventListener('touchstart', handler);
}
