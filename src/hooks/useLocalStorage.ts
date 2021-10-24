import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function useLocalStorage<T>(
	key: string,
	init: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState(() => {
		if (localStorage.hasOwnProperty(key)) {
			return JSON.parse(localStorage.getItem(key) ?? '');
		}

		if (init instanceof Function) {
			return init();
		}
		return init;
	});

	// save the state to locale storage any time it changes
	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(state));
		} catch (e) {
			// ignore
		}
	}, [key, state]);

	return [state, setState];
}
