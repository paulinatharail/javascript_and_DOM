//descriptive data from data.js
var sightings = data;

//select filter button
var filterButton = d3.select('#filter-btn');

// Get a reference to the table body
var tbody = d3.select("tbody");



//on Button click event
filterButton.on("click", function(){

    //prevent the page from refreshing
    d3.event.preventDefault();

    // console.log("Button clicked");

    //Get the date to use as a filter
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    //Filter the data based on the date entered
    var filteredData = sightings.filter(sight => sight.datetime === inputValue);
    console.log(filteredData);


    // Get a reference to the table body
    var tbody = d3.select("tbody");

    //populate the table
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });

});