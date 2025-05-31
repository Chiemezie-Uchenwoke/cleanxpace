const bookingFormBtn = document.getElementById("booking-form-btn");
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    bookingFormBtn.disabled = true;
    bookingFormBtn.innerText = "Sending...";

    // Collect all selected cleaning types
    const selectedCleaningTypes = Array.from(document.querySelectorAll('input[name="cleaning_type"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');


    const params = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        street_address: document.getElementById("street_address").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        postal_code: document.getElementById("postal_code").value,
        cleaning_type: selectedCleaningTypes,
        freq: document.getElementById("freq").value,
        cleaning_date: document.getElementById("cleaning_date").value,
        time: document.getElementById("time").value,
        space_size: document.getElementById("space_size").value,
        square_footage: document.getElementById("square_footage").value,
        additional_notes: document.getElementById("additional_notes").value,
    };

    const serviceID = "service_ubq3uy4";
    const templateID = "template_iu3a5ph";

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            bookingForm.reset();
            location.href = "thank-you-booking-form.html";
        })
        .catch((err) => {
            alert("Something went wrong. Please try again.");
            console.error(err);
        })
        .finally(() => {
            bookingFormBtn.disabled = false;
            bookingFormBtn.innerText = "Send Message";
        });
});
