let menu = {
  Breakfast: [
    { name: "Idli", price: 30, img: "images/idli.jpg" },
    { name: "Dosa", price: 50, img: "images/dosa.jpg" }
  ],
  Lunch: [
    { name: "Meals", price: 120, img: "images/meals.jpg" },
    { name: "Biriyani", price: 180, img: "images/biriyani.jpg" }
  ],
  Dinner: [
    { name: "Chapati", price: 40, img: "images/chapati.jpg" },
    { name: "Fried Rice", price: 100, img: "images/friedrice.jpg" }
  ],
  Sidedish:[
    {name:"chicken tandoori",price: 200, img: "images/chicken tandoori.jpg"},
    {name:"chicken lollipop",price: 100, img: "images/chicken lollipop.jpg"}
  ]
};

// ======================
// CART DATA
// ======================
let cart = [];

// ======================
// ADD ITEM TO CART
// ======================
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

// ======================
// RENDER CART TABLE
// ======================
function renderCart() {
  const table = document.getElementById("cartTable");
  table.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const priceCell = row.insertCell(1);

    nameCell.innerText = item.name;
    priceCell.innerText = "₹" + item.price;
  });

  if (cart.length > 0) {
    const totalRow = table.insertRow();
    totalRow.insertCell(0).innerText = "Total";
    totalRow.insertCell(1).innerText = "₹" + total;
  }
}

// ======================
// BUY NOW (SHOW QR)
// ======================
function buyNow() {
  if (cart.length === 0) {
    alert("Cart is empty. Add items first.");
    return;
  }

  document.getElementById("paymentModal").style.display = "flex";
}

// ======================
// PAYMENT SUCCESS
// ======================
function paymentSuccess() {
  document.getElementById("paymentModal").style.display = "none";
  // Print bill
  window.print();

  // Clear cart
  cart = [];
  renderCart();

  // Confirmation
  alert("Payment Successful! Thank you for your order.");
}
function showBillAndPrint() {
  const bill = document.getElementById("bill");
  const billItems = document.getElementById("billItems");
  const billTotal = document.getElementById("billTotal");

  billItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>₹${item.price * item.qty}</td>
    `;
    billItems.appendChild(row);
    total += item.price * item.qty;
  });

  billTotal.innerText = total;

  // FORCE reflow before print
  bill.style.display = "block";

  setTimeout(() => {
    window.print();
  }, 300);
}