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

// CLOSE MODALS
const modal2 = document.getElementById("modalXButton");
modal2.addEventListener("click", closeModal);

function closeModal() {
    const modal = document.getElementById("modalOverlay");    // what the close function really does above --> want modalpopup style.display to be none
    modal.style.display = "none";
    modal2.style.display = "none";
    // preventDefault();
}

// MODAL 2:
// CHANGE COLOUR OF BUTTON WHEN THE ABOVE IS CHECKED: add eventlistener to switch to green button

// 1.CHANGE COLOUR OF THE VALIDER BUTTON WITH EVENT LISTENER
const modal3 = document.getElementById("modal_formContainer");
modal3.addEventListener("click", changeValidateButtonColor)

function changeValidateButtonColor() {
    document.getElementById("validButton").style.background = "green"; // PROBLEM: BECOMING GREEN ANYWHERE I CLICK + want HEX colour
    //  document.getElementsByClassName("validButton").setAttribute("id", "validatedButton"); // PROBLEM IS THAT IT IS NOT RECOGNISING THE CLASS FOR THE GREY BUTTON.ONLY GETTING THE GREEN ONE
}

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

// 3 CONDITIONS FOR MODAL TO CHANGE:
// --> text is captured, category is captured, photo is chosen

    // 1.CAPTURE VALUE OF THE TITLE INPUT
const titleInput = document.getElementById("titre").value; // DO I NEED A FUNCTION OR AN EVENT LISTENER TO DO SOMETHING WITH VALUE THAT WE HAVE CAPTURED, see next line
const titleHeading = document.getElementById("titleHeader");
titleHeading.addEventListener("change", ($event) => {
        $event.preventDefault(); // to avoid the submit refreshing
    titleHeading.textContent = $event.target.value;
    })

// 2. CAPTURE THE DROPDOWN SELECTION. NB. CATEGORIES ARE NOT YET FETCHED SO DO NOT APPEAR IN DROP DOWN
const categorySelectList = document.getElementById("modalCategorieList"); // the list of categories
const categoryHeading = document.getElementById("modalCategorie"); // the category title
categorySelect.addEventListener("change", ($event) => {
    categoryHeading.textContent = $event.target.value;
})

// 3. PHOTO IS CHOSEN ---> COVERED IN HTML LINE 107 AND IS HIDDEN. ALTERNATIVE BUTTON. "button" function has been removed from html
// FILE SYSTEM FOR UPLOADING THE PHOTO.
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


/*
// CREATING FORMDATA OBJECT: add event listener, then create object 
document.addEventListener('DOMContentLoaded', () => {
    let formData = new FormData();
    // append the name/value key pair --> adds the html elm / file you want to send. for a file, it is a blob(not a string) + optional file name for the server
    formData.append('name', 'value')

    // add the array for all the filenames you want to send with a loop --> not done

    // send to server --> create url to pass to fetch object with request to server
    let url = 'http://www.example.com/';
    let req = new Request({
    url: url,
    body: fd
    })
    fetch(req)
    .then(response => response.json() )
    .then( data => {})
    .catch( err => {})
})*/

//  GO BACK --> ADD EVENTLISTENER, CLICK, FUNCTION IS GOING TO IDENTIFY THE ID OF MODAL1 (modalPopup ID)

const modal1 = document.getElementById("modal_formContainer");
modal1.addEventListener("click", changeModal1)

function changeModal1() {
    document.getElementById("modalPopup").style.display = ""; // 
    //  document.getElementsByClassName("validButton").setAttribute("id", "validatedButton"); 
}




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