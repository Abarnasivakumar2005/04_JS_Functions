// Using functions to add and display tax

var sale1;
var sale2;
var sale3;
var sale4; // Step 1: Add a fourth sale object
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 80, taxRate: 12 }; // New sale object

calculateTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function () {
    console.log("Price = $" + sale.price);
    console.log("Tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("Total cost = $" + sale.total);
};

// Step 3: Create a function to handle calculation and display for each sale
var processSale = function (sale) {
    calculateTax();
    displaySale();
};

// Process each sale object
sale = sale1;
processSale(sale);

sale = sale2;
processSale(sale);

sale = sale3;
processSale(sale);

sale = sale4; // Process the new sale
processSale(sale);
