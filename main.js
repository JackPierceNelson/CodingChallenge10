// Task 2: Add Event Listeners for Product Selection 

const product = {
    name: "Computer Monitor",
    base_price: 100,
    sizes: {
        Small: {price: 100, stock: 10},
        Medium: {price: 200, stock: 5},
        Large: {price: 300, stock: 0}
    }
};

    // DOM elements
    const productNameElement = document.getElementById("product-name");
    const priceElement = document.getElementById("product-price");
    const selectedSize = document.getElementById("size-selector");
    const availabilityStatus = document.getElementById("availability-status");
    const purchaseButton = document.getElementById("purchase-button");

    // Function to update price and availability
function updateProductInfo() {
    const sizeSelector = selectedSize.value;
    const sizeInfo = product.sizes[sizeSelector];
    if (sizeInfo) {
        // Update Price
        priceElement.textContent = `Price: $${sizeInfo.price}`;
        if (sizeInfo.stock > 0) {
            // Update Availability
            availabilityStatus.textContent = `Availability: In stock: ${sizeInfo.stock}`;
            purchaseButton.disabled = false;
        }
        else {
            availabilityStatus.textContent = "Availability: Out of Stock";
            purchaseButton.disabled = true;
        }
    }
    else {
        priceElement.textContent = `Price: $${product.base_price.toFixed(2)}`;
        availabilityStatus.textContent = "Availability: Please Select a Size";
    }
}

// Add an event listener to the size selector that calls the function when the selection changes

selectedSize.addEventListener("change", updateProductInfo);
// Initialize the page
productNameElement.textContent = product.name;
updateProductInfo();