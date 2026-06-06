document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("contact-form");

if (!form) return;

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            document.getElementById("form-success").style.display = "block";

            form.reset();

        } else {

            alert("There was an issue sending your enquiry. Please try again.");

        }

    } catch (error) {

        alert("There was an issue sending your enquiry. Please try again.");

    }

});
});