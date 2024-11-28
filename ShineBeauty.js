const unitPrice = 200; 
const form = document.getElementById("orderForm");
const quantityInput = document.getElementById("quantity");
const totalElement = document.getElementById("total");
const ordersTableBody = document.getElementById("ordersTableBody");


quantityInput.addEventListener("input", () => {
  const quantity = parseInt(quantityInput.value, 10) || 0;
  totalElement.textContent = (quantity * unitPrice).toFixed(2);
});


