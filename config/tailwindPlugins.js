function outlinePlugin({ addUtilities, e, theme, variants }) {
	const palette = flattenColorPalette(theme('colors'));

	const width = Object.entries(theme('spacing')).map(([key, value]) => {
		return { [`.${e(`outline-${key}`)}`]: { outlineWidth: `${value}` } };
	});

	const color = Object.entries(palette).map(([key, value]) => {
		return {
			[`.${e(`outline-${key}`)}`]: { outlineColor: `${value}` },
		};
	});

	const offset = Object.entries(theme('spacing')).map(([key, value]) => {
		return {
			[`.${e(`outline-offset-${key}`)}`]: { outlineOffset: `${value}` },
		};
	});

	const negativeOffset = Object.entries(theme('spacing')).map(([key, value]) => {
		return {
			[`.-${e(`outline-offset-${key}`)}`]: { outlineOffset: `-${value}` },
		};
	});
	addUtilities(
		[
			...width,
			...color,
			...offset,
			...negativeOffset,
			{
				[`.${e('outline')}`]: { outlineWidth: '1px' },
				[`.${e('outline-offset')}`]: { outlineOffset: '1px' },
				[`.${e('-outline-offset')}`]: { outlineOffset: '-1px' },
				[`.${e('outline-solid')}`]: { outlineStyle: 'solid' },
				[`.${e('outline-dashed')}`]: { outlineStyle: 'dashed' },
				[`.${e('outline-dotted')}`]: { outlineStyle: 'dotted' },
			},
		],
		variants('outlinePlugin'),
	);
}

const flattenColorPalette = (colors) =>
	Object.assign(
		{},
		...Object.entries(colors).flatMap(([color, values]) =>
			typeof values == 'object'
				? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
						[color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
				  }))
				: [{ [`${color}`]: values }],
		),
	);

module.exports = { outlinePlugin };
