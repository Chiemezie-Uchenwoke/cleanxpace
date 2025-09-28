const contactFormBtn = document.getElementById("contact-form-btn");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactFormBtn.disabled = true;
    contactFormBtn.innerText = "Sending...";

    const params = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "";
    const templateID = "";

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            contactForm.reset();
            location.href = "thank-you.html";
        })
        .catch((err) => {
            alert("Something went wrong. Please try again.");
            console.error(err);
        })
        .finally(() => {
            contactFormBtn.disabled = false;
            contactFormBtn.innerText = "Send Message";
        });
});
