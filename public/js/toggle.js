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