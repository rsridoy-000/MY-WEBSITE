var typed1 = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "GAMER", "PHOTOGRAPHER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed2 = new Typed(".multiple-text2", {
    strings: ["PORTFOLIO...", "R S R I D O Y..."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
});
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}
document.querySelectorAll(".navbar a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".navbar").classList.remove("show");
    });
});
