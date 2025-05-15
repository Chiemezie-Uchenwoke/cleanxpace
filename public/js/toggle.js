const toggleOpenBtn = document.querySelector(".open-mobile");
const toggleCloseBtn = document.querySelector(".close-mobile");
const mobileDropDown = document.querySelector("nav.dropdown")

toggleOpenBtn.addEventListener("click", () => {
    mobileDropDown.style.display = "flex";
});

toggleCloseBtn.addEventListener("click", () => {
    mobileDropDown.style.display = "none";
});