const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


let count = 1;

document.getElementById("radio1").checkd = true;

setInterval(function () {
    nextImage();
}, 6000)

function nextImage() {
    count++; 
    if (count >3){
        count = 1;
    }

    document.getElementById("radio" +count).checked = true;
}