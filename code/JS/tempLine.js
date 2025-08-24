function drawTemperaturetLineChart(tLine_svgId, tLine_dataUrl, tselectedLocation) {
    d3.select("#my_tlinedataviz svg").remove();
    // set the dimensions and margins of the graph
    const tLine_margin = {top: 10, right: 30, bottom: 30, left: 60},
    tLine_width = window.innerWidth - tLine_margin.left - tLine_margin.right,
    tLine_height = window.innerHeight - tLine_margin.top - tLine_margin.bottom;
  
    // append the svg object to the body of the page
    const tLine_svg = d3.select(tLine_svgId)
      .append("svg")
        .attr("width", tLine_width + tLine_margin.left + tLine_margin.right)
        .attr("height", tLine_height + tLine_margin.top + tLine_margin.bottom)
      .append("g")
        .attr("transform", `translate(${tLine_margin.left},${tLine_margin.top})`);

  
    //Read the data
    d3.csv(tLine_dataUrl,
  
      // When reading the csv, I must format variables:
      function(d){
        return { date : d3.timeParse("%Y-%m-%d")(d.dt), value : d.AverageTemperature, location : d.Country }
      }).then(
  
      // Now I can use this dataset:
      function(data) {
        tFilteredData = data.filter(d=>d.location==tselectedLocation);
        // Add X axis --> it is a year format
        const x = d3.scaleTime()
        .domain(d3.extent(tFilteredData, d => d.date))
          .range([ 0, tLine_width ]);
          tLine_svg.append("g")
          .attr("transform", `translate(0, ${tLine_height})`)
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
        const tLine_max = d3.max(eFilteredData, function(d) { return +d3.mean(d.value); })
        // Min value observed:
        const tLine_min = d3.min(eFilteredData, function(d) { return +d3.mean(d.value); })
  
        // Add Y axis
        const y = d3.scaleLinear()
          .domain([-40, 60])
          .range([ tLine_height, 0 ]);
          tLine_svg.append("g")
          .call(d3.axisLeft(y)).append("text")
          .attr("y", 6)
          .attr("dy", "-2em")
          .attr("x", -360)
          .attr("text-anchor", "start")
          .attr("font-size", "12px")
          .attr("fill", "black")
          .text("Temperature(C)")
          .attr("transform", "translate(-10,0)rotate(-90)");
        
        // Set the gradient
        tLine_svg.append("linearGradient")
          .attr("id", "line-gradient")
          .attr("gradientUnits", "userSpaceOnUse")
          .attr("x1", 0)
          .attr("y1", y(0))
          .attr("x2", 0)
          .attr("y2", y(tLine_max))
          .selectAll("stop")
            .data([
              {offset: "0%", color: "blue"},
              {offset: "100%", color: "red"}
            ])
          .enter().append("stop")
            .attr("offset", function(d) { return d.offset; })
            .attr("stop-color", function(d) { return d.color; });
  
        // Add the line
        tLine_svg.append("path")
          .datum(tFilteredData)
          .attr("fill", "none")
          .attr("stroke", "url(#line-gradient)" )
          .attr("stroke-width", 2)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.value) })
            )
  
    });
  }
  var tselectedLocation= "India";
  // Call the function with the desired SVG id and data URL
  drawTemperaturetLineChart("#my_tlinedataviz", "https://raw.githubusercontent.com/amanvalera/Dataset/main/Temperature.csv",tselectedLocation);
  