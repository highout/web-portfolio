const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        message.textContent = "Будь ласка заповніть всі поля";
        message.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        message.textContent = "Email повинен містити @";
        message.style.color = "red";
        return;
    }

    if(password.length < 6){
        message.textContent = "Пароль повинен містити мінімум 6 символів";
        message.style.color = "red";
        return;
    }

    if(password !== confirmPassword){
        message.textContent = "Паролі не співпадають";
        message.style.color = "red";
        return;
    }

    message.textContent = "Реєстрація успішна!";
    message.style.color = "green";

});