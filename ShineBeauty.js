// const unitPrice = 200; 
// const form = document.getElementById("orderForm");
// const quantityInput = document.getElementById("quantity");
// const totalElement = document.getElementById("total");
// const ordersTableBody = document.getElementById("ordersTableBody");


// quantityInput.addEventListener("input", () => {
//   const quantity = parseInt(quantityInput.value, 10) || 0;
//   totalElement.textContent = (quantity * unitPrice).toFixed(2);
// });


// Sélection des éléments du formulaire
const form = document.getElementById('order-Form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const quantityInput = document.getElementById('quantity');
const choiceInput = document.getElementById('choice');

// Sélection des éléments d'erreur
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const addressError = document.getElementById('addressError');
const phoneError = document.getElementById('phoneError');
const quantityError = document.getElementById('quantityError');

// Fonction pour afficher les erreurs
function displayError(input, errorElement, message) {
  if (!input.value.trim()) {
    errorElement.textContent = message; // Message d'erreur
    input.classList.add('error-border'); // Ajout d'une bordure rouge
    return false;
  } else {
    errorElement.textContent = ''; // Suppression du message d'erreur
    input.classList.remove('error-border'); // Suppression de la bordure rouge
    return true;
  }
}


// Validation du champ email
function validateEmail(input, errorElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour email
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


// Validation du champ téléphone
function validatePhone(input, errorElement) {
  const phonePattern = /^[0-9]{10}$/; // Regex pour téléphone (10 chiffres)
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

// Gestion de la soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Validation des champs
  const isNameValid = displayError(nameInput, nameError, 'Le champ nom et prénom est requis.');
  const isEmailValid = validateEmail(emailInput, emailError);
  const isAddressValid = displayError(addressInput, addressError, 'Le champ adresse est requis.');
  const isPhoneValid = validatePhone(phoneInput, phoneError);
  const isQuantityValid = displayError(quantityInput, quantityError, 'La quantité est requise.');

  // Si tout est valide, soumettre les données
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

    // Ajouter la commande au tableau
    addOrderToTable(order);

    // Réinitialiser le formulaire
    form.reset();
    document.getElementById('total').textContent = '200';
  }
});

// Ajouter une commande au tableau
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

// Gestion du changement de quantité pour mettre à jour le total
quantityInput.addEventListener('input', () => {
  const quantity = parseInt(quantityInput.value, 10) || 0;
  const total = quantity * 200;
  document.getElementById('total').textContent = total;
});
