export let a4 = {
	pageSize: "A4",
	pageOrientation: "landscape",
	pageMargins: [0, 0, 0, 0],
	styles: {
		ean1: {
			margin: [0, 0, 0, 0],
			fontSize: 140,
			alignment: "center"
		},
		ean2: {
			margin: [0, -40, 0, 0],
			fontSize: 250,
			bold: true,
			alignment: "center"
		},
		barcode: {
			margin: [20, -30, 0, 0]
		},
		name: {
			margin: [20, 0, 20, 0],
			fontSize: 40,
			alignment: "left"
		},
		quantity: {
			margin: [0, 0, 20, 0],
			fontSize: 110,
			alignment: "right"
		},
		id: {
			margin: [20, -40, 20, 0],
			fontSize: 30,
			alignment: "right"
		}
	},
	defaultStyle: {},
	content: vm.getLabels()
}