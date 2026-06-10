// Wait for the webpage elements to fully load
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.querySelector(".theme-toggle");

    // Listen for a click on the moon icon button to flip modes
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// Your contact form confirmation message injector
function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.innerText = "Thank you for reaching out! I will get back to you soon.";
    
    // Clear form inputs smoothly after submission
    document.querySelector(".contact-form").reset();
}
