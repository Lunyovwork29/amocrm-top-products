document.addEventListener("DOMContentLoaded", () => {
  let products = [
    {name: "Коробки", qty: 15, sum: 120000},
    {name: "Еврокубы", qty: 8, sum: 520000},
    {name: "Поддоны", qty: 7, sum: 17500}
  ];

  let container = document.getElementById("top-products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `<li>${p.name}: ${p.qty} шт / ${p.sum} ₸</li>`;
  });
});
