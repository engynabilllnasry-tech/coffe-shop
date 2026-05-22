const filterButtons = document.querySelectorAll(".menu-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        galleryItems.forEach(item => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide"); 
            }
        });
    });
});