function drawEmissionLineChart(eLine_svgId, eLine_dataUrl, eselectedLocation) {
    d3.select("#my_linedataviz svg").remove();
    // set the dimensions and margins of the graph
    const eLine_margin = {top: 10, right: 30, bottom: 30, left: 60},
    eLine_width = window.innerWidth - eLine_margin.left - eLine_margin.right,
    eLine_height = window.innerHeight - eLine_margin.top - eLine_margin.bottom;
  
    // append the svg object to the body of the page
    const eLine_svg = d3.select(eLine_svgId)
      .append("svg")
        .attr("width", eLine_width + eLine_margin.left + eLine_margin.right)
        .attr("height", eLine_height + eLine_margin.top + eLine_margin.bottom)
      .append("g")
        .attr("transform", `translate(${eLine_margin.left},${eLine_margin.top})`);
     // eLine_onClick function to handle click event on the emission line chart

  
    //Read the data
    d3.csv(eLine_dataUrl,
  
      // When reading the csv, I must format variables:
      function(d){
        return { year : d.year, value : d.co2, location : d.country }
      }).then(
  
      // Now I can use this dataset:
      function(data) {
        eFilteredData = data.filter(d=>d.location==eselectedLocation);
        // Add X axis --> it is a year format
        const x = d3.scaleLinear()
          .domain(d3.extent(eFilteredData, function(d) { return d.year; }))
          .range([ 0, eLine_width ]);
          eLine_svg.append("g")
          .attr("transform", `translate(0, ${eLine_height})`)
          .call(d3.axisBottom(x))
          .append("text")
          .attr("y", 50)
          .attr("dy", "-2em")
          .attr("x", 720)
          .attr("text-anchor", "start")
          .attr("font-size", "12px")
          .attr("fill", "black")
          .text("Year");
  
        // Max value observed:
        const eLine_max = d3.max(eFilteredData, function(d) { return +d.value; })
  
        // Add Y axis
        const y = d3.scaleLinear()
          .domain([0, eLine_max])
          .range([ eLine_height, 0 ]);
          eLine_svg.append("g")
          .call(d3.axisLeft(y))
          .append("text")
            .attr("y", 6)
            .attr("dy", "-2em")
            .attr("x", -360)
            .attr("text-anchor", "start")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("Carbon Emssion (mt)")
            .attr("transform", "translate(-10,0)rotate(-90)");
        
        // Set the gradient
        eLine_svg.append("linearGradient")
          .attr("id", "line-gradient")
          .attr("gradientUnits", "userSpaceOnUse")
          .attr("x1", 0)
          .attr("y1", y(0))
          .attr("x2", 0)
          .attr("y2", y(eLine_max))
          .selectAll("stop")
            .data([
              {offset: "0%", color: "blue"},
              {offset: "100%", color: "red"}
            ])
          .enter().append("stop")
            .attr("offset", function(d) { return d.offset; })
            .attr("stop-color", function(d) { return d.color; });
  
        // Add the line
        eLine_svg.append("path")
          .datum(eFilteredData)
          .attr("fill", "none")
          .attr("stroke", "url(#line-gradient)" )
          .attr("stroke-width", 2)
          .attr("d", d3.line()
            .x(function(d) { return x(d.year) })
            .y(function(d) { return y(d.value) })
            ).style("transform", "scale(0.001,0.001")
            .transition()
            .duration(5000)
            .style("transform", null)
  
    });
  }
  var eselectedLocation= "India";
  // Call the function with the desired SVG id and data URL
  drawEmissionLineChart("#my_linedataviz", "https://raw.githubusercontent.com/amanvalera/Dataset/main/CO2_emission_by_year.csv",eselectedLocation);
  