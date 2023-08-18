const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formEmail = document.getElementById("inputEmail").value;
    const formPassword = document.getElementById("inputPassword").value;

    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formEmail, formPassword }),
    });

    if (response.ok) {
        const responseData = response.json();
        window.localStorage.setItem('accessToken', responseData.token);
        window.location.assign("index.html")
    }
    else {
        const connexion = document.querySelector("div");
        const error = document.createElement("p");
        error.innerText = "authentification error";
    }
});