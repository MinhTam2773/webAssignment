// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let message;
document.getElementById("submit-button").addEventListener("click", () => {
    message = document.getElementById("contact-page");
    message.style.fontSize = '24px';
    message.innerHTML = "<main><p>Thank you for your message!</p></main>";
})

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

