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
var typed = new Typed(".multiple-text3", {
    strings: ["My name is R S RIDOY. I'm currently a 5th-semester student of the Computer Science Department at Jessore Polytechnic Institute, and I'm the captain of my class. I aspire to become a skilled Web Apps Developer. I have gained proficiency in HTML, CSS, and JavaScript, and I'm actively working with these technologies."],
    typeSpeed: 50,
  }
    )
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}
document.querySelectorAll(".navbar a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".navbar").classList.remove("show");
    });
});
