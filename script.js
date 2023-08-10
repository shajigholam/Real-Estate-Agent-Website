// JavaScript for the contact form
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

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    if (!firstName.match(nameRegex) || !lastName.match(nameRegex)) {
        alert('Please enter valid first and last names.');
        return false;
    }

    if (!phone.match(phoneRegex)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!propertyType || !bedrooms || !bathrooms || !priceRange) {
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

    // Send email
    const mailtoLink = `mailto:${agentEmail}?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Display success prompt
    if (window.confirm('Registered Successfully. Do you want to send the email now?')) {
        window.location.href = mailtoLink;
    }

    return false; // Prevent form submission
}

document.getElementById('contactForm').addEventListener('submit', validateForm);
