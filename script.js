function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.innerText = "Thank you for reaching out! I will get back to you soon.";
    
    // Smoothly clear form text areas if needed
    document.querySelector(".contact-form").reset();
}
