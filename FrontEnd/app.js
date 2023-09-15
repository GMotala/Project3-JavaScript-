async function getProjectList() {
    const responseProjects = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. 
    const projectList = await responseProjects.json();
    console.log(projectList);

    const responseCategories = await fetch('http://localhost:5678/api/categories'); // reponse is the response from the server. fetch is the request. 
    const categoryList = await responseCategories.json();
    console.log(categoryList);

    // console.log(projectList[0].category);
    const gallery = document.getElementById('galleryList'); // create id galleryList to be specific
};
getProjectList();

const navButton = document.querySelector(".buttons");
// Create "All" button
const allButton = document.createElement("button");
allButton.innerText = "All";
// Create "Objects" button
const objectButton = document.createElement("button");
objectButton.innerText = "Objets";
// Create "Appartment" button
const appartmentButton = document.createElement("button");
appartmentButton.innerText = "Appartements";
// Create "Hôtels & restaurants" button
const hotelButton = document.createElement("button");
hotelButton.innerText = "Hôtels & restaurants";
//
navButton.appendChild(allButton);
navButton.appendChild(objectButton);
navButton.appendChild(appartmentButton);
navButton.appendChild(hotelButton);

//Declare works in global variable
let projects = [];
//Declare the filter in a global variable
let filter = "";
//Insert variable in the function
getProjects(filter);
//Function to call API
async function getProjects(filter) {
    const reponse = await fetch("http://localhost:5678/api/works/");
    projects = await reponse.json();
    
    let objectButton = []; //Initialisation
    switch (
    filter //switch to filter
    ) {
        case "All":
            objectButton = projects.filter((projects) => projects.categoryId);
            break;
        case "Objets": // if "filter" = "objets"
            objectButton = projects.filter((projects) => projects.categoryId == 1);
            break;
        case "Appartements":
            objectButton = projects.filter((projects) => projects.categoryId == 2);
            break;
        case "Hôtels & restaurants":
            objectButton = projects.filter((projects) => projects.categoryId == 3);
            break;
        default:
            objectButton = projects; // default case to call all works 
    }

    for (let i = 0; i < objectButton.length; i++) {
        const figure = objectButton[i];
        // DOM element
        const divGallery = document.querySelector(".gallery");
        // Creation of tags for figures
        const projectsElement = document.createElement("figure");
        // Creation of tags
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;

        const nameElement = document.createElement("p");
        nameElement.innerText = figure.title;

        // Attach a tag to the Gallery div
        divGallery.appendChild(projectsElement);
        projectsElement.appendChild(imageElement);
        projectsElement.appendChild(nameElement);
    }
}

const buttonObject = document.querySelector("button");

allButton.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filter = "All";
    getProjects(filter);
});
objectButton.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filter = "Objets";
    getProjects(filter);

});

appartmentButton.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filter = "Appartements";
    getProjects(filter);
});

hotelButton.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filter = "Hôtels & restaurants";
    getProjects(filter);
});

/*for (let i = 0; i < projectList.length; i++) {
if (buttonCategory == projectList[i].categoryId) {
}*/

// create function that will add the button via a loop


/* ----------- THE MODALS ----------- */
