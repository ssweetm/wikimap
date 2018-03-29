var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple"
	},
	
	nodeStructure: {
		text: { name: "Biology" },
		link:	{href: "https://en.wikipedia.org/wiki/Biology"},
		children: [
			{
				text: { name: "Anatomy" },
				link: {href: "https://en.wikipedia.org/wiki/Anatomy"},
			},
			{
				text: { name: "Cell Biology" },
				link: {href: "https://en.wikipedia.org/wiki/Cell_biology"}
			}
		]
	}
};