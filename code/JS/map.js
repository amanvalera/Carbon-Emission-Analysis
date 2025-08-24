
function plotMap(map_geojsonUrl, map_data, map_colorDomain, map_colorRange) {
    d3.select("#my_mapdataviz svg").remove();
    // The svg
    const map_margin = {top: 30, right: 60, bottom: 70, left: 60};
    const map_width = window.innerWidth;
    const map_height = window.innerHeight;
// append the svg object to the body of the page
const map_svg = d3.select("#my_mapdataviz")
.append("svg")
.attr("width", map_width+ map_margin.left + map_margin.right)
.attr("height", map_height+ map_margin.top + map_margin.bottom);
  
    // Map and projection
    const map_path = d3.geoPath();
    const map_projection = d3.geoMercator()
      .scale(150)
      .center([0, 20])
      .translate([map_width / 2, map_height / 2]);
  
    // Color scale
    const map_colorScale = d3.scaleThreshold()
      .domain(map_colorDomain)
      .range(map_colorRange);
  
    let map_mouseOver = function (d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
    };
  
    let map_mouseLeave = function (d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8);
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent");
    };
  
    let map_onClick = function(d){
        d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
        d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
        // .html("<a href="#my_areadataviz"></a>");
        const filteredLocation = d3.select(this).attr("id");
        console.log(filteredLocation);
        drawEmissionLineChart("#my_linedataviz", "https://raw.githubusercontent.com/amanvalera/Dataset/main/CO2_emission_by_year.csv",filteredLocation);
        createPieChart("2018", filteredLocation);
        gdpAreaChart("https://raw.githubusercontent.com/amanvalera/Dataset/main/CO2_emission_by_year.csv",filteredLocation);
        drawTemperaturetLineChart("#my_tlinedataviz", "https://raw.githubusercontent.com/amanvalera/Dataset/main/Temperature.csv",filteredLocation);
  
      }

    // Load GeoJSON data
    d3.json(map_geojsonUrl).then(function (map_geojson) {
      // Draw the map
      map_svg.append("g")
        .selectAll("path")
        .data(map_geojson.features)
        .enter()
        .append("path")
        // draw each country
        .attr("d", d3.geoPath()
          .projection(map_projection)
        )
        .attr("id", function(d){ return d.properties.name; })
        // set the color of each country
        .attr("fill", function (d) {
          d.total = map_data.get(d.id) || 0;
          return map_colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function (d) {
          return "Country";
        })
        .style("opacity", .8)
        .on("mouseover", map_mouseOver)
        .on("mouseleave", map_mouseLeave)
        .on("click",map_onClick);
    });
  }
  
  // Example usage:
  const svgSelector = "svg"; // replace with the selector for your SVG element
  const map_geojsonUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
  const map_csvUrl1 = "https://raw.githubusercontent.com/amanvalera/Dataset/main/Population.csv";
  const map_csvUrl2 = "https://raw.githubusercontent.com/amanvalera/Dataset/main/Emissions.csv";
  const map_colorDomain1 = [100000, 1000000, 10000000, 30000000, 100000000, 500000000]; // replace with your desired color domain
  const map_colorDomain2 = [0, 100, 200, 500, 1000, 5000, 25000]; // replace with your desired color domain
  const map_colorRange = d3.schemeBlues[7]; // replace with your desired color range
  plotData1();
  // Load CSV data
  function plotData1(){d3.csv(map_csvUrl1, function (d) {
    return {
      loc: d["Country Code"],
      value: +d[2018]
    };
  }).then(function (data) {
    const map_data1 = new Map();
    data.forEach(function (d) {
        map_data1.set(d.loc, d.value);
    });
    // Call plotMap function with loaded data
    plotMap(map_geojsonUrl, map_data1, map_colorDomain1, map_colorRange);
  });
  }
  function plotData2() {
    d3.csv(map_csvUrl2, function (d) {
      return {
        loc: d.ISO3,
        value: +d.F2018
      };
    }).then(function (data) {
      const map_data2 = new Map();
      data.forEach(function (d) {
        map_data2.set(d.loc, d.value);
      });
      
      // Call plotMap function with loaded data
      plotMap(map_geojsonUrl, map_data2, map_colorDomain2, map_colorRange);
    });
  } 