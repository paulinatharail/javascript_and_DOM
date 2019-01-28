//descriptive data from data.js
var sightings = data;

//select filter button
var filterButton = d3.select('#filter-btn');

// Get a reference to the table body
var tbody = d3.select("tbody");



// //function to get filtered data given date and city
// function dateCity(dateFilter, cityFilter){

// }



//on Button click event
filterButton.on("click", function(){

    //prevent the page from refreshing
    d3.event.preventDefault();

    // console.log("Button clicked");

    //Get the date to use as a filter
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Get the city filter
    var inputCity = d3.select("#city");
    var inputCityValue = inputCity.property("value");
    console.log(inputCityValue);
    
    // debugger;

    if (inputCityValue != "" && inputValue != "") {
        //Filter the data based on the date entered
        var filteredData = sightings.filter(sight => sight.datetime === inputValue
            && sight.city === inputCityValue );
        console.log(filteredData);

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
    } 
    else if (inputValue != ""){
        console.log("else section entered");
        //Filter the data based on the date entered
        var filteredData = sightings.filter(sight => sight.datetime === inputValue);
        console.log(filteredData);

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
    }
    else {
        console.log("Neither criteria met");
    }
});