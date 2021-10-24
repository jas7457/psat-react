import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import Cookies from 'js-cookie';

export default function useCookie<T>(
	key: string,
	init: T | (() => T),
): [T, Dispatch<SetStateAction<T>>, () => void] {
	const [state, setState] = useState(() => {
		const value = Cookies.get(key);
		if (value) {
			return JSON.parse(value);
		}

		if (init instanceof Function) {
			return init();
		}
		return init;
	});

	const removeCookie = useCallback(() => {
		Cookies.remove(key);
		setState(null);
	}, [key]);

	// save the state to locale storage any time it changes
	useEffect(() => {
		if (state === null) {
			removeCookie();
			return;
		}
		try {
			Cookies.set(key, JSON.stringify(state));
		} catch (e) {
			// ignore
		}
	}, [key, state]);

	return [state, setState, removeCookie];
}
