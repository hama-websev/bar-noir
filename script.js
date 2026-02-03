const hamburger = document.getElementById("hamburger");
const spmenu = document.getElementById("sp-menu");
const spnav = document.getElementById("sp-nav");
const spLinks = document.querySelectorAll('#sp-menu a');

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
spmenu.classList.toggle("active");
spnav.classList.toggle("active");
});

spLinks.forEach(linck => {
    linck.addEventListener('click', () => {
        hamburger.classList.toggle("active");
spmenu.classList.toggle("active");
spnav.classList.toggle("active");
    });
});