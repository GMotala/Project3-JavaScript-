const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formEmail = document.getElementById("inputEmail").value;
    const formPassword = document.getElementById("inputPassword").value;

    loginCredentials = {
        email: formEmail,
        password: formPassword
    }
    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginCredentials)
    });

    if (response.ok) {
        const responseData = await response.json();
        window.localStorage.setItem('accessToken', responseData.token);
        window.location.assign("index.html")
    }
    else {
        const errorMessageContainer = document.getElementById('invalidEmail');
        errorMessageContainer.innerHTML = "erreur d'authentification"
        
    }
});