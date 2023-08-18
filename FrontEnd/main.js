async function getProjectList() {
    const responseProjects = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. 
    const projectList = await responseProjects.json();
    console.log(projectList);

    const responseCategories = await fetch('http://localhost:5678/api/categories'); // reponse is the response from the server. fetch is the request. 
    const categoryList = await responseCategories.json();
    console.log(categoryList);

    // console.log(projectList[0].category);
    const gallery = document.getElementById('galleryList'); // create id galleryList to be specific

    for (let i = 0; i < projectList.length; i++) {
        // console.log(projectList[i].title, "project title"); loops through each title in the object
        // console.log(projectList[i].imageUrl, "the url"); 
        const figure = document.createElement('figure'); // creates figure tag
        const img = document.createElement('img'); // creates img tag
        const figcaption = document.createElement('figcaption'); // creates figcaption tag
       
        // adds the classes to the new element created above
        figure.setAttribute("style", '');
        figure.setAttribute("class", "figureClassName");
        figure.setAttribute("data-categoryId", projectList[i].categoryId);
        figcaption.setAttribute("class", "figcaptionClassName");
        
        // fetch the value from the API object
        img.src = projectList[i].imageUrl;
        img.alt = projectList[i].title;
        // add the property of the category we want
        figcaption.innerHTML = projectList[i].title

        // add the img and figureCaption to the to the figure element
        figure.appendChild(img);
        figure.appendChild(figcaption);
        // add to gallery, outside of loop
        gallery.appendChild(figure);
    };
    
};
getProjectList();

function filterByCategory(selectedCategory) {
    const allWorks = document.getElementsByClassName('figureClassName'); // adds to figure
    for (let i = 0; i < allWorks.length; i++) {
        allWorks.item(i).style.display = 'none'; // hides all items of the collections
        if (allWorks.item(i).dataset.categoryId == selectedCategory) {
            allWorks.item(i).style.display = 'block';
        }
    };
};

// 2.2user authentification --> POST

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    const formEmail = document.getElementById("email").value;
    const formPassword = document.getElementById("password").value;
    e.preventDefault();

    const response = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formEmail, formPassword }),
    });
    console.log("hi");
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