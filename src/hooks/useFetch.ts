import { useCallback, useEffect, useMemo, useRef } from 'react';
import useAsync from './useAsync';

export default function useFetch<TData extends object>(url: string, options?: RequestInit) {
	const optionsRef = useRef(options);
	optionsRef.current = options;

	const controller = useMemo(() => new AbortController(), []);

	const [data, { state, error }] = useAsync<TData>(async () => {
		try {
			const response = await fetch(url, { ...optionsRef.current, signal: controller.signal });

			if (!response.ok) {
				const error = await response.text();
				throw new Error(error);
			}

			return (await response.json()) as TData;
		} catch (e: unknown) {
			if (e instanceof DOMException && e.name !== 'AbortError') {
				return undefined;
			}

			throw e;
		}
	}, [url, controller]);

	const abort = useCallback(() => {
		controller.abort();
	}, [controller]);

	useEffect(() => {
		// automatically cancel the request on unmount or the url changes
		return abort;
	}, [abort]);

	return [
		data,
		{
			state,
			error,
			abort,
		},
	] as const;
}
