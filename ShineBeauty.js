


const form = document.getElementById('order-Form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const quantityInput = document.getElementById('quantity');
const choiceInput = document.getElementById('choice');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const addressError = document.getElementById('addressError');
const phoneError = document.getElementById('phoneError');
const quantityError = document.getElementById('quantityError');

const navbarToggler = document.getElementById("navbarToggler");
const navbarMenu = document.getElementById("navbarMenu");

function displayError(input, errorElement, message) {
  if (!input.value.trim()) {
    errorElement.textContent = message; 
    input.classList.add('error-border');
    return false;
  } else {
    errorElement.textContent = '';
    input.classList.remove('error-border'); 
    return true;
  }
}


function validateEmail(input, errorElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.value.trim()) {
    errorElement.textContent = 'Le champ email est requis.';
    input.classList.add('error-border');
    return false;
  } else if (!emailPattern.test(input.value)) {
    errorElement.textContent = 'Veuillez entrer un email valide.';
    input.classList.add('error-border');
    return false;
  } else {
    errorElement.textContent = '';
    input.classList.remove('error-border');
    return true;
  }
}


function validatePhone(input, errorElement) {
  const phonePattern = /^[0-9]{10}$/; 
  if (!input.value.trim()) {
    errorElement.textContent = 'Le numéro de téléphone est requis.';
    input.classList.add('error-border');
    return false;
  } else if (!phonePattern.test(input.value)) {
    errorElement.textContent = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
    input.classList.add('error-border');
    return false;
  } else {
    errorElement.textContent = '';
    input.classList.remove('error-border');
    return true;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const isNameValid = displayError(nameInput, nameError, 'Le champ nom et prénom est requis.');
  const isEmailValid = validateEmail(emailInput, emailError);
  const isAddressValid = displayError(addressInput, addressError, 'Le champ adresse est requis.');
  const isPhoneValid = validatePhone(phoneInput, phoneError);
  const isQuantityValid = displayError(quantityInput, quantityError, 'La quantité est requise.');

  if (isNameValid && isEmailValid && isAddressValid && isPhoneValid && isQuantityValid) {
    const order = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      address: addressInput.value.trim(),
      phone: phoneInput.value.trim(),
      quantity: parseInt(quantityInput.value, 10),
      product: choiceInput.options[choiceInput.selectedIndex].text,
      total: parseInt(quantityInput.value, 10) * 200, // Calculer le total
    };

    addOrderToTable(order);

    form.reset();
    document.getElementById('total').textContent = '200';
  }
});

function addOrderToTable(order) {
  const tableBody = document.getElementById('ordersTableBody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${order.name}</td>
    <td>${order.email}</td>
    <td>${order.address}</td>
    <td>${order.phone}</td>
    <td>${order.quantity}</td>
    <td>${order.total} MAD</td>
    <td>${order.product}</td>
  `;
  tableBody.appendChild(newRow);
}

quantityInput.addEventListener('input', () => {
  const quantity = parseInt(quantityInput.value, 10) || 0;
  const total = quantity * 200;
  document.getElementById('total').textContent = total;
});

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  console.log('clicked')
});