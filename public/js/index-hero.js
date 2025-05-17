const images = ["images/home_1.jpg", "images/man_cleaning.jpg", "images/clean_1.jpg", "images/sofa_2.jpg"];
const heroContainer = document.getElementById("hero");
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
    let imageUrl = images[index];
    heroContainer.style.backgroundImage = `url(${imageUrl})`;
    heroContainer.style.transition = `background-image 0.3s ease-in-out`;

    const handleImage = () => {
        index = (index + 1) % images.length;
        imageUrl = images[index];
        heroContainer.style.backgroundImage = `url(${imageUrl})`;
    }

    setInterval(handleImage, 5000);
});