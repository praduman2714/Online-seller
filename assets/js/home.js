// Get the input and button elements
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");

// Add event listener to the search button
searchButton.addEventListener("click", function() {
    var searchValue = searchInput.value.toLowerCase();

    // Loop through each product card and hide/show based on search value
    var productCards = document.getElementsByClassName("product-card");
    for (var i = 0; i < productCards.length; i++) {
        var productName = productCards[i].querySelector("h3").innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            productCards[i].style.display = "block";
        } else {
            productCards[i].style.display = "none";
        }
    }
});