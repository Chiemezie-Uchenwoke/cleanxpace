const toggleOpenBtn = document.querySelector(".open-mobile");
const toggleCloseBtn = document.querySelector(".close-mobile");
const mobileDropDown = document.querySelector("nav.dropdown")

toggleOpenBtn.addEventListener("click", () => {
    mobileDropDown.classList.remove("remove-animation");
    mobileDropDown.style.display = "flex";
    mobileDropDown.classList.add("animate-mobile");
});

toggleCloseBtn.addEventListener("click", () => {
    mobileDropDown.classList.remove("animate-mobile");
    mobileDropDown.classList.add("remove-animation");
    setTimeout(() => {
        mobileDropDown.style.display = "none";
    }, 1000);
});

// footer
const yearNode = document.getElementById("year");
const year = new Date().getFullYear();
yearNode.textContent = year;

// scroll to top
const scrollToTopBtn = document.getElementById("scrollTop");
scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > window.innerHeight){
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});