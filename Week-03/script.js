// Mobile Navbar Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// Home Delivery Form Validation
const deliveryForm = document.getElementById('delivery-form');

deliveryForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('del-name').value.trim();
    let phone = document.getElementById('del-phone').value.trim();
    let item = document.getElementById('del-item').value;
    let address = document.getElementById('del-address').value.trim();

    let nameErr = document.getElementById('del-name-err');
    let phoneErr = document.getElementById('del-phone-err');
    let itemErr = document.getElementById('del-item-err');
    let addressErr = document.getElementById('del-address-err');
    let statusMsg = document.getElementById('del-status-msg');

    // Reset messages
    nameErr.textContent = "";
    phoneErr.textContent = "";
    itemErr.textContent = "";
    addressErr.textContent = "";
    statusMsg.textContent = "";

    let isValid = true;

    if (name === "") {
        nameErr.textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "") {
        phoneErr.textContent = "Please enter phone number.";
        isValid = false;
    }

    if (item === "") {
        itemErr.textContent = "Please select a food item.";
        isValid = false;
    }

    if (address === "") {
        addressErr.textContent = "Please enter delivery address.";
        isValid = false;
    }

    if (isValid) {
        statusMsg.textContent = "Order Placed Successfully! Your food will arrive soon.";
        deliveryForm.reset();
    }
});

// Reservation Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let nameErr = document.getElementById('name-error');
    let emailErr = document.getElementById('email-error');
    let msgErr = document.getElementById('message-error');
    let formMsg = document.getElementById('form-msg');

    nameErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";
    formMsg.textContent = "";

    let isValid = true;

    if (name === "") {
        nameErr.textContent = "Name is required.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailErr.textContent = "Enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        msgErr.textContent = "Please write reservation details.";
        isValid = false;
    }

    if (isValid) {
        formMsg.textContent = "Table Reserved Successfully! We will confirm via email.";
        contactForm.reset();
    }
});