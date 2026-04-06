let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");
    const resultMessage = document.querySelector("#resultMessage");
    
    emailError.textContent = "";
    passwordError.textContent = "";
    resultMessage.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    const isValidEmail = emailRegex.test(email.value);
    const isValidPassword = passwordRegex.test(password.value);

    let isValid = true;

    if(!isValidEmail) {
        emailError.textContent = "Email is incorrect";
        isValid = false;
    }
    if(!isValidPassword) {
        passwordError.textContent = "Password must contain 8-20 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
        isValid = false;
    }

    if(isValid) {
        resultMessage.textContent = "Successfully Login";
        resultMessage.style.color = "green";
    }
});