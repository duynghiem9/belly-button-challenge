# belly-button-challenge

Build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalofs the microbes that colonize human navels.

## Instructions

1) Use D3 library to read in samples.json using URL

2) Create Horizontal Bar Chart + Bubble Chart for the top 10 OTUs
	
	- sample values = x
	
	- otu_ids = y
	
	- labels = text
	
	- make sure it is Horizontal
	
	- Bubble:
	
	- otu_ids = x
	
	- sample_values = y
	
	- sample_values = marker size
	
	- otu_ids = marker color
	
	- labels = text
	
3) grab metadata and display it:

	- Angel's code:
	
		- get metadata, then filter it since metadata as a variable is all metadata, so sort by ID
	
		- get first index of the sorted array to select it
	
		- make a panel
	
	- the rest:
	
		- append the panel with the metadata and print each one
		
4) Update ids for plots and metadata for dropdown menu

## resources:

Angel:

	- https://gyazo.com/7da1ef91ba4db905298b7f9c04ae393a
	
	- https://gyazo.com/d63a8c659f80db6ece0131acfab253f3

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://plotly.com/javascript/bubble-charts/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


	