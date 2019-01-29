//descriptive data from data.js
var sightings = data;

//select filter button
var filterButton = d3.select('#filter-btn');

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a reference to the table body
var tbody = d3.select("tbody");

sightings.forEach((sighting) => {
    var row = tbody.append("tr").attr("id", "rowData");
    Object.entries(sighting).forEach(([key, value]) => {
    var cell = tbody.append("td").attr("id", "rowData");
    cell.text(value);
    });
});


//on Button click event
filterButton.on("click", function(){

    //prevent the page from refreshing
    d3.event.preventDefault();

    //Get the date to use as a filter
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Get the city filter
    var inputCity = d3.select("#city");
    var inputCityValue = inputCity.property("value");
    console.log(inputCityValue);

    //search criteria
    var searchCriteria = "";
    
    // debugger;

    if (inputCityValue != "" && inputValue != "") {  //filter on date and city
        var filteredData = sightings.filter(sight => sight.datetime === inputValue
            && sight.city === inputCityValue );
        console.log(filteredData);      
        searchCriteria = "Results for " + inputCityValue + " and " + inputValue;
    } 
    else if (inputValue != ""){ //filter only on date
        var filteredData = sightings.filter(sight => sight.datetime === inputValue);
        console.log(filteredData);
        searchCriteria = "Results for " + inputValue;
    }
    else if (inputCity != "") { //filter only on city
        var filteredData = sightings.filter(sight => sight.city === inputCityValue);
        console.log(filteredData);
        searchCriteria = "Results for " + inputCityValue;
    }
    
    else {
        console.log("Neither criteria met");
    }

      //Modify the filter header to show filter conditions
      console.log(searchCriteria);
      d3.select(".dateheader").text(searchCriteria);

      //clear any exisiting rows
      d3.selectAll("#rowData").remove();

      //populate the table
      filteredData.forEach((sighting) => {
          
          // Get a reference to the table body
          var tbody = d3.select("tbody");

          var row = tbody.append("tr").attr("id", "rowData");
          Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td").attr("id", "rowData");
          cell.text(value);
          });
      });
});