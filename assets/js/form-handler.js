function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return false;
    }

    // Create the email content
    const emailSubject = encodeURIComponent('Contact Form: ' + subject);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`);
    
    // Open default email client with pre-filled content
    window.location.href = `mailto:bhandalkaromkar4@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Clear the form
    document.getElementById('contact-form').reset();
    
    return false;
}