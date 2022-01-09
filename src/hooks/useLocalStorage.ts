import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function useLocalStorage<T extends string | undefined>(
	key: string,
	init: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState(() => {
		if (localStorage.hasOwnProperty(key)) {
			return localStorage.getItem(key) as T;
		}

		if (init instanceof Function) {
			return init();
		}
		return init;
	});

	// save the state to locale storage any time it changes
	useEffect(() => {
		try {
			if (typeof state === 'string') {
				localStorage.setItem(key, state);
			} else {
				localStorage.removeItem(key);
			}
		} catch (e) {
			// ignore
		}
	}, [key, state]);

	return [state, setState];
}
