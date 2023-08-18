/*async function main() {
    const response = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. re
    const projectList = await response.json();
    console.log(projectList);
    console.log(projectList[0].title);
}
main();

// create figure element and add to gallery
const newFigure = document.createElement('figure');
const gallery = document.querySelector('div');
gallery.appendChild(newFigure);

// create new image element and add to gallery
const newImg = document.createElement('img');
figure.appendChild(newImg);

// create new figcaption and add to gallery
const newFigcaption = document.createElement('figcaption');
gallery.appendChild(newFigcaption);*/

async function main() {
    const response = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. re
    const projectList = await response.json();
    console.log(projectList);
    // console.log(projectList[0].title);

    for (let i = 0; i < projectList.length; i++) {
        console.log('hello'); // the i that is iterating
        console.log(projectList[i], "project"); // console element in the iteration -->
        console.log(projectList[i].title, "project title");
        console.log(projectList[i].imageUrl, "the url")
    }
}

async function main() {
    const response = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. re
    const projectList = await response.json();

    for (let i = 0; i < projectList.length; i++) {
        console.log(projectList[i].title, "project title");
        console.log(projectList[i].imageUrl, "the url")

        const figure = document.createElement('figure'); // creates figure tag
        const img = document.createElement('img'); // creates img tag
        const figcaption = document.createElement('figcaption'); // creates figcaption tag
    }
}
// what do i need to extract ? 
// 1. create new elements


/*const figureAtt = document.createAttribute("class");
figureAtt.value = "figureClass"*/

// const findFigure = document.getElementsByTagName("figure")[0]; // getting from DOM
// idenitify the element you are looking for(--> figure) gets the 1st figure that exists

figure.setAttribute("class", "figureClass")
console.log(figure)

/*findFigure.setAttributeNode(figureAtt) // the class and value to be assigned to the */

/*

const newFigure = document.getElementsByTagName("figure")[0];
figure.setAttributeNode(newFigure); */ 

// 2. add the img and figureCaption to the to the figure element
newFigure.appendChild(newImg);
newFigure.appendChild(newFigcaption);


4. add to gallery
const gallery = document.querySelector('div');
gallery.appendChild(newFigure);

// 5. pass the property to add in the innerHTML
newImg.innerHTML = '<a href="#" ${projectList.imageUrl[1]}>'; // do not want hard-coded value, but I want this property of the object
newFigcaption.innerHTML = '${projectList.title}'; // idem */

function getProjects(projectList) {
    for (let i = 0; i < projectList.length; i++) {
        const project = projectList[i];
    }
}

main();


/*button.addEventListener('click', () => {
    const allCategories = 
    }) */