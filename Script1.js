// Selecci�n de elementos
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".card-product");

// Evento de b�squeda
searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase(); // Convertir a min�sculas para buscar de manera insensible a may�sculas
    productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchText)) {
            card.style.display = "block"; // Mostrar productos que coincidan
        } else {
            card.style.display = "none"; // Ocultar productos que no coincidan
        }
    });
});
