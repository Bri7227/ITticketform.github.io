document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        issueType: document.getElementById('issueType').value,
        description: document.getElementById('description').value
    };

    // Here you can send the data to your server or handle it as needed
    console.log('Form submitted:', formData);
    
    // Reset the form
    this.reset();
});
