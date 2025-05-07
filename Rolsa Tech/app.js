// Add any JavaScript functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
});

// script.js
const products = [
    { name: "Energy Efficient Refrigerator", category: "appliances" },
    { name: "LED Light Bulb", category: "lighting" },
    { name: "Smart Thermostat", category: "heating" },
    { name: "Energy Star Washing Machine", category: "appliances" },
    { name: "Solar Panel", category: "heating" },
];

const filterBtn = document.getElementById('filterBtn');
const productList = document.getElementById('product-list');

filterBtn.addEventListener('click', () => {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const categoryValue = document.getElementById('category').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue ? product.category === categoryValue : true;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
});

function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Category: ${product.category}</p>`;
        productList.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Basic validation
    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match!";
        return;
    }

    // Here you can add code to send the data to your server
    // For demonstration, we'll just show a success message
    messageDiv.textContent = "Registration successful! Welcome, " + name + "!";
    messageDiv.style.color = "green";

    // Clear the form
    document.getElementById('registrationForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessageDiv = document.getElementById('loginMessage');

    // Here you can add code to validate the user's credentials
    // For demonstration, we'll just show a success message
    if (email === "user@example.com" && password === "password123") {
        loginMessageDiv.textContent = "Login successful! Welcome back!";
        loginMessageDiv.style.color = "green";
    } else {
        loginMessageDiv.textContent = "Invalid email or password!";
        loginMessageDiv.style.color = "red";
    }

    // Clear the form
    document.getElementById('loginForm').reset();
});

document.getElementById("calculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const milesDriven = parseFloat(document.getElementById("milesDriven").value);
    const electricityUsage = parseFloat(document.getElementById("electricityUsage").value);
    const meatConsumption = parseFloat(document.getElementById("meatConsumption").value);

    // Constants for calculations (example values)
    const CO2_PER_MILE = 0.404; // kg CO2 per mile
    const CO2_PER_KWH = 0.92; // kg CO2 per kWh
    const CO2_PER_MEAL = 2.5; // kg CO2 per meat meal

    // Calculate carbon footprint
    const carbonFootprint = (milesDriven * CO2_PER_MILE) + 
                            (electricityUsage * CO2_PER_KWH) + 
                            (meatConsumption * CO2_PER_MEAL);

    // Display result
    document.getElementById("result").innerHTML = `Your estimated carbon footprint is ${carbonFootprint.toFixed(2)} kg of CO2 per week.`;
});

