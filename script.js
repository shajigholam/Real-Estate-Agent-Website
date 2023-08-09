// JavaScript for the contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const propertyType = document.getElementById('propertyType').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const priceRange = document.getElementById('priceRange').value;

    if (!firstName || !lastName || !phone || !email || !propertyType || !bedrooms || !bathrooms || !priceRange) {
        alert('Please fill out all fields.');
        return false;
    }

    const agentEmail = 'walter.white@gmail.com';

    // Construct email body
    const emailBody = `
        New Contact Form Submission:

        First Name: ${firstName}
        Last Name: ${lastName}
        Phone: ${phone}
        Email: ${email}
        Property Type: ${propertyType}
        Bedrooms: ${bedrooms}
        Bathrooms: ${bathrooms}
        Price Range: ${priceRange}
    `;

    // Send email (Note: This is a simplified example)
    const mailtoLink = `mailto:${agentEmail}?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Display success prompt
    if (window.confirm('Registered Successfully. Do you want to send the email now?')) {
        window.location.href = mailtoLink;
    }

    return false; // Prevent form submission
}
