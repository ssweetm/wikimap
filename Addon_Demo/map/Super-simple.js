var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple"
	},
	
	nodeStructure: {
			text: { name: "Biology" },
			link:	{ href: "https://en.wikipedia.org/wiki/Biology"},
		children: [
			{
				text: { name: "Anatomy" },
				link: { href: "https://en.wikipedia.org/wiki/Anatomy"},
				children: [
					{
						text: { name: "Embryology"},
						link: {	href: "https://en.wikipedia.org/wiki/Embryology"},
					},
					{
						text: { name: "Evolutionary Biology"},
						link: { href: "https://en.wikipedia.org/wiki/Evolutionary_biology"},
					},
					{
						text: { name: "Phylogeny"},
						link: { href: "https://en.wikipedia.org/wiki/Phylogenetic_tree"},
					}
				]
			},
			{
				childrenDropLevel: 2,
				text: { name: "Cell Biology" },
				link: { href: "https://en.wikipedia.org/wiki/Cell_biology"},
				children: [
					{
						text: { name: "Organelles"},
						link: { href: "https://en.wikipedia.org/wiki/Organelle"},
					}
				]
			},
			{
				text: { name: "Microbiology" },
				link: { href: "https://en.wikipedia.org/wiki/Microbiology"},
			},
			{
				text: { name: "Genetics"},
				link: { href: "https://en.wikipedia.org/wiki/Genetics"},
				children: [
					{
						text: { name: "Genes"},
						link: {	href: "https://en.wikipedia.org/wiki/Gene"},
					},
					{
						text: { name: "Genetic Variation"},
						link: { href: "https://en.wikipedia.org/wiki/Genetic_variation"},
					}
				]
			}
		]
	}
};


new Treant( simple_chart_config );