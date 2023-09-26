// Use the D3 library to read in samples.json from the URL (and then call everything)
// https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init()
{
    // make selector
    let selector = d3.select("#selDataset")
    // get data
    d3.json(url).then(data => {
        // names array
        let sampleNames = data.names

        for (let i = 0; i<sampleNames.length;i++)
        {
            selector.append("option").text(sampleNames[i]).property("value", sampleNames[i])
        }
        // get first sample name
        let firstSampleName = sampleNames[0]
        // call functions
        buildMetadata(firstSampleName)
        createPlots(firstSampleName)
        
    })
}

// Create a plots with a dropdown menu to display the top 10 OTUs found in that individual.
function createPlots(sample)
{
    d3.json(url).then (data => {
        // filter data to the sample id
        var idSample = data.samples.filter(i => i.id == sample)
        // get ids
        var ids = idSample[0].otu_ids
        // print to check
        console.log(ids)

        // get sample values top 10 is slice index 0-9, then reverse
        var sampleValues = idSample[0].sample_values.slice(0,10).reverse()
        // print
        console.log(sampleValues)

        // get labels
        var labels = idSample[0].otu_labels.slice(0,10)
        // print
        console.log(labels)

        // get top 10 otu ids for bar plot
        var topOTU = idSample[0].otu_ids.slice(0,10).reverse()
        // get otu ids ready for plot
        var otuID = topOTU.map(x => "OTU " + x)

        // bubble data get ready
        var bubbleIds = idSample[0].otu_ids
        var bubbleValue = idSample[0].sample_values
        var bubbleLabels = idSample[0].otu_labels

        // make plot data
        var plotData = 
        [{
            x:sampleValues,
            y:otuID,
            text: labels,
            type: "bar",
            orientation: "h"
        }]
        // plot plot data
        Plotly.newPlot("bar", plotData)

        // making bubble data
        var bubbleData = 
        [{
            x: bubbleIds,
            y: bubbleValue,
            mode:"markers",
            marker: {
                size: bubbleValue,
                color: bubbleIds
            },
            text: bubbleLabels
        }]
        // make layout so I can add an xlabel
        var layout = 
        {
            xaxis:{
                title: "OTU ID"
            }
        }

        Plotly.newPlot("bubble", bubbleData, layout)
    })
}

// Display the sample metadata, i.e., an individual's demographic information.
function buildMetadata(sample)
{
    d3.json(url).then((data) =>
    {
        // angel's code to make array for metadata
        let metadata = data.metadata
        // make sure the id selected is a string to match the parameters
        let array = metadata.filter(m => m.id.toString() == sample)
        let array1 = array[0]
        // make panel for demographic info
        let panel = d3.select("#sample-metadata")

        panel.html("")
        // adding text to demographic info
        Object.entries(array1).forEach((meta) => {
            panel.append("h5").text(`${meta[0]}: ${meta[1]}\n`)
        })
    
    })
    
}
// Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.
function optionChanged(sample)
{
    // call metadata and plots
    createPlots(sample)
    buildMetadata(sample)
}


// call initial function
init()

