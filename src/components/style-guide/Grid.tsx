import clsx from 'clsx';

/**
 * An easy-to-use grid system for React.
 */
export default function Grid({
	children,
	className,
	columns,
	smColumns,
	mdColumns,
	lgColumns,
	xlColumns,
	gap = 'none',
	...rest
}: GridProps) {
	return (
		<div
			className={clsx(
				'grid',
				className,
				{
					'grid-cols-1': columns === 1,
					'grid-cols-2': columns === 2,
					'grid-cols-3': columns === 3,
					'grid-cols-4': columns === 4,
					'grid-cols-5': columns === 5,
					'grid-cols-6': columns === 6,
					'grid-cols-7': columns === 7,
					'grid-cols-8': columns === 8,
					'grid-cols-9': columns === 9,
					'grid-cols-10': columns === 10,
					'grid-cols-11': columns === 11,
					'grid-cols-12': columns === 12,
				},
				{
					'sm:grid-cols-1': smColumns === 1,
					'sm:grid-cols-2': smColumns === 2,
					'sm:grid-cols-3': smColumns === 3,
					'sm:grid-cols-4': smColumns === 4,
					'sm:grid-cols-5': smColumns === 5,
					'sm:grid-cols-6': smColumns === 6,
					'sm:grid-cols-7': smColumns === 7,
					'sm:grid-cols-8': smColumns === 8,
					'sm:grid-cols-9': smColumns === 9,
					'sm:grid-cols-10': smColumns === 10,
					'sm:grid-cols-11': smColumns === 11,
					'sm:grid-cols-12': smColumns === 12,
				},
				{
					'md:grid-cols-1': mdColumns === 1,
					'md:grid-cols-2': mdColumns === 2,
					'md:grid-cols-3': mdColumns === 3,
					'md:grid-cols-4': mdColumns === 4,
					'md:grid-cols-5': mdColumns === 5,
					'md:grid-cols-6': mdColumns === 6,
					'md:grid-cols-7': mdColumns === 7,
					'md:grid-cols-8': mdColumns === 8,
					'md:grid-cols-9': mdColumns === 9,
					'md:grid-cols-10': mdColumns === 10,
					'md:grid-cols-11': mdColumns === 11,
					'md:grid-cols-12': mdColumns === 12,
				},
				{
					'lg:grid-cols-1': lgColumns === 1,
					'lg:grid-cols-2': lgColumns === 2,
					'lg:grid-cols-3': lgColumns === 3,
					'lg:grid-cols-4': lgColumns === 4,
					'lg:grid-cols-5': lgColumns === 5,
					'lg:grid-cols-6': lgColumns === 6,
					'lg:grid-cols-7': lgColumns === 7,
					'lg:grid-cols-8': lgColumns === 8,
					'lg:grid-cols-9': lgColumns === 9,
					'lg:grid-cols-10': lgColumns === 10,
					'lg:grid-cols-11': lgColumns === 11,
					'lg:grid-cols-12': lgColumns === 12,
				},
				{
					'xl:grid-cols-1': xlColumns === 1,
					'xl:grid-cols-2': xlColumns === 2,
					'xl:grid-cols-3': xlColumns === 3,
					'xl:grid-cols-4': xlColumns === 4,
					'xl:grid-cols-5': xlColumns === 5,
					'xl:grid-cols-6': xlColumns === 6,
					'xl:grid-cols-7': xlColumns === 7,
					'xl:grid-cols-8': xlColumns === 8,
					'xl:grid-cols-9': xlColumns === 9,
					'xl:grid-cols-10': xlColumns === 10,
					'xl:grid-cols-11': xlColumns === 11,
					'xl:grid-cols-12': xlColumns === 12,
				},
				{
					'gap-1': gap === 'small',
					'gap-3': gap === 'medium',
					'gap-6': gap === 'large',
				},
			)}
			{...rest}
		>
			{children}
		</div>
	);
}

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridProps = Pick<
	React.PropsWithoutRef<JSX.IntrinsicElements['div']>,
	'onClick' | 'className'
> & {
	children: React.ReactNode;
	columns: Cols;
	smColumns?: Cols;
	mdColumns?: Cols;
	lgColumns?: Cols;
	xlColumns?: Cols;
	gap?: 'none' | 'small' | 'medium' | 'large';
};
