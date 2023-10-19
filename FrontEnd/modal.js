let modal = null // will know which is the modal that is open --> see line 23 to open

async function openModal() {
    const modal = document.getElementById('modalOverlay');
    modal.style.display = "flex";

    const responseProjects = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. 
    const projectList = await responseProjects.json();
    console.log(projectList);

    /* const divWorksContainer = document.getElementById('worksContainer'); // create id galleryList to be specific
    for (let i = 0; i < projectList.length; i++) {
        const projectListItem = projectList[i];
        // Creation of tags for figures
        const figureElement = document.createElement("figure");
        figureElement.setAttribute("class", "worksContainerFigure")
        // Creation of tags
        const imageElement = document.createElement("img");
        imageElement.src = projectListItem.imageUrl;

        // Attach a tag to the Gallery div
        divWorksContainer.appendChild(figureElement);
        figureElement.appendChild(imageElement);
    } */
}
// function above is called when clicking on modifier button 
const obj_modifier = document.getElementById("btn_modifier");
obj_modifier.addEventListener("click", openModal);


function addPhoto() {
    const obj_addWork = document.getElementById("btn_addWork");
    const obj_worksContainer = document.getElementById("modal_worksContainer");
    const obj_formContainer = document.getElementById('modal_formContainer');
    obj_addWork.addEventListener("click", () => {
        obj_worksContainer.style.display = "none";
        obj_formContainer.style.display = "flex"
    });
}

const modal2 = document.getElementById("event-modal-close");
modal2.addEventListener("click", closeModal);

function closeModal() {
    const modal = document.getElementById("modalOverlay");    // what the close function really does above --> want modalpopup style.display to be none
    modal.style.display = "none";
    modal2.style.display = "none";
}

//  GO BACK
/* if (formContainer) {
    modalRedirection();
    //back arrow
    const back = document.querySelector("back");
    const closeModal = document.querySelector("close");

    back.addEventListener(`click`, () => {
        // works container shows and form container is hidden
        worksContainer.style.display = "flex";
        formContainer.style.display = "none";
    });
    // close whole modalOverlay --> make everything 'none'
}
else {
} */

 // DYNAMICALLY GET THE CATEGORY FOR ADDING THE PROJECT

 // FETCH THE CATEGORIES FROM THE API AND MAKE THE CATEGORIES AVAILABLE --> LOOP THROUGH
// --- Add category  ---
async function getSelectCategory() {
    const responseCategories = await fetch('http://localhost:5678/api/categories'); // reponse is the response from the server. fetch is the request. 
    console.log(responseCategories);
    const categoryList = await responseCategories.json();
    const selectCategory = document.getElementById("categorie");

    // 
    for (let categoryItem of categoryList) {
        const option = document.createElement("option");
        option.textContent = categoryItem.name;
        option.value = categoryItem.id;
        selectCategory.appendChild(option);
    }
}
getSelectCategory();

// VALIDER BUTTON
const submitButton = document.querySelector(".valid");

// FILE SYSTEM
let fileHandle; // moved to global scope
async function button() {
    [fileHandle] = await window.showOpenFilePicker();
    consolge.log(fileHandle.kind);
    let fileData = fileHandle.getFile();
    let text = await fileData.text();
    console.log(text); // reads file you get from the browser

    async function save() {
        let stream = await fileHandle.CreateWritable();
        await stream.write(textarea.innerText);
        await stream.close();
    } // allows you to have text, click save and data is replicated in local file system
}

// show include value of photo modal --> 3rd modal
async function addPhotoValues() {
}










// improve naming --> be more specific re buttons / objects
// to test form container, call the works container
// for displaying photo --> use filesystem --> NOT A FETCH FUNCTION --> 
// when no photo, button is grey, when there is a photo + text + category, button is green (3 conditions met)