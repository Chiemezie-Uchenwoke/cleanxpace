const submitBtn = document.getElementById("contact-form-btn");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Get form data
    const formData = new FormData(contactForm);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            contactForm.reset();

            // Redirect to success page
            window.location.href = '/thank-you.html'; 

        } else {
            alert('Something went wrong. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'submit';
        }

    } catch (err) {
        console.error("Error: ", err);
        submitBtn.disabled = false;
        submitBtn.textContent = 'submit';
    }
    
});
