import { useEffect, useState, useRef, DependencyList } from 'react';

export default function useAsync<TData>(
	fn: () => Promise<TData | undefined>,
	deps?: DependencyList,
) {
	const [data, setData] = useState<TData | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	const fnRef = useRef(fn);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError(null);
				setData(undefined);

				const data = await fnRef.current();
				setData(data);
			} catch (e: unknown) {
				setError(e as Error);
			} finally {
				setIsLoading(false);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return [
		data,
		{
			state: error ? 'error' : isLoading ? 'loading' : 'loaded',
			error,
		},
	] as const;
}
