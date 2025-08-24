// Set the dimensions and margins of the chart
var width = window.innerWidth;
var height = window.innerHeight;
var margin = 40;

// Select the SVG container element and set its width and height
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Function to create pie chart
function createPieChart(year, country) {
  // Load the CSV file
  d3.csv("https://raw.githubusercontent.com/amanvalera/Dataset/main/CO2_emission_by_year.csv").then(function(data) {
    // Filter the data for the selected year and country
    var filteredData = data.filter(function(d) {
      return d.year === year && d.country === country;
    });

    // Extract the CO2 emissions for each source from the filtered data
    var coalCO2 = parseFloat(filteredData[0].coal_co2);
    var flaringCO2 = parseFloat(filteredData[0].flaring_co2);
    var gasCO2 = parseFloat(filteredData[0].gas_co2);
    var landUseChangeCO2 = parseFloat(filteredData[0].land_use_change_co2);
    var oilCO2 = parseFloat(filteredData[0].oil_co2);

    // Create a data array for the pie chart
    var pieData = [
      { source: "Coal", emissions: coalCO2 },
      { source: "Flaring", emissions: flaringCO2 },
      { source: "Gas", emissions: gasCO2 },
      { source: "Land Use Change", emissions: landUseChangeCO2 },
      { source: "Oil", emissions: oilCO2 }
    ];

    // Create a pie generator
    var pie = d3.pie()
      .value(function(d) { return d.emissions; });

    // Generate the pie chart
    var pieChart = svg.append("g")
      .attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");

    // Append slices to the pie chart
    var slices = pieChart.selectAll("path")
      .data(pie(pieData))
      .enter()
      .append("path")
      .attr("d", d3.arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - margin)
      )
      .attr("fill", function(d, i) { return d3.schemeCategory10[i]; })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      
      .on("mouseover", function(d) {
        // Highlight arc on mouseover
        d3.select(this).transition()
          .duration(200)
          .attr("d", d3.arc()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2 - margin + 10)
          );
      })
      .on("mouseout", function(d) {
        // Remove highlight on mouseout
        d3.select(this).transition()
          .duration(200)
          .attr("d", d3.arc()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2 - margin)
          );
      }).append("title") // append title element for tooltip
      .text(function(d) {
        return "Source: " + d.data.source + "\nEmissions: " + d.data.emissions + " MtCO2"; // Add source and emissions information to the tooltip
      });
    
    // Add legend
var legend = pieChart.selectAll(".legend")
.data(pieData)
.enter()
.append("g")
.attr("class", "legend")
.attr("transform", function(d, i) {
  var legendHeight = 20;
  var legendSpacing = 10;
  var offset = legendHeight * pieData.length / 2;
  var horz = width / 2 - 320;
  var vert = i * (legendHeight + legendSpacing) - offset -320;
  return "translate(" + horz + "," + vert + ")";
});

// Add legend colored rectangles
legend.append("rect")
.attr("width", 18)
.attr("height", 18)
.attr("fill", function(d, i) { return d3.schemeCategory10[i]; });

// Add legend text
legend.append("text")
.attr("x", 24)
.attr("y", 9)
.attr("dy", ".35em")
.text(function(d) { return d.source; });

}).catch(function(error) {
    console.log(error); // Log any errors to the console
    });
    }
    
    // Call the function to create the pie chart with default values
    createPieChart("2018", "India");