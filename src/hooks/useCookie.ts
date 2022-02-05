import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import Cookies from 'js-cookie';

type ValidType = string | null;

export default function useCookie(
	key: string,
	init: ValidType | (() => ValidType),
): [ValidType, Dispatch<SetStateAction<ValidType>>, () => void] {
	const [state, setState] = useState(() => {
		const value = Cookies.get(key);
		if (value) {
			return value;
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
			Cookies.set(key, state);
		} catch (e) {
			// ignore
		}
	}, [key, removeCookie, state]);

	return [state, setState, removeCookie];
}
