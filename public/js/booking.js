const submitBtn = document.getElementById("booking-form-btn");
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    // Get form data
    const formData = new FormData(bookingForm);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            bookingForm.reset();

            // Redirect to success page
            window.location.href = '/thank-you-booking-form.html'; 
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
