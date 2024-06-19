export default function plugin() {
	return {
		name: "sample",
		transform(src: string, id: string) {
			if (!/node_modules/.test(id) && /\/src/.test(id)) {
				const unCode = src.replace(/unko/gi, "💩");
				return {
					code: unCode,
					map: null, // provide source map if available
				};
			}
		},
		transformIndexHtml(html: string) {
			return html.replace(/unko/gi, "💩");
		},
	};
}
