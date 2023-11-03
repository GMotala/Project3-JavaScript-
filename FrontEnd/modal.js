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
const modalXButton = document.getElementById("modalXButton");
modalXButton.addEventListener("click", closeModal);

function closeModal() {
    const modal = document.getElementById("modalOverlay"); // what the close function really does above --> want modalpopup style.display to be none
    modal.style.display = "none";
}

// 1.CHANGE COLOUR OF THE VALIDER BUTTON WITH EVENT LISTENER
const modal3 = document.getElementById("modal_formContainer");
modal3.addEventListener("click", changeValidateButtonColor)

function changeValidateButtonColor() {
    document.getElementById("validButton").style.background = "green"; // PROBLEM: BECOMING GREEN ANYWHERE I CLICK + want HEX colour
}

 // FETCH THE CATEGORIES FROM THE API AND MAKE THE CATEGORIES AVAILABLE --> LOOP THROUGH
// --- Add category  ---
async function getSelectCategory() {
    const responseCategories = await fetch('http://localhost:5678/api/categories'); // reponse is the response from the server. fetch is the request. 
    console.log(responseCategories);
    const categoryList = await responseCategories.json();
    const selectCategory = document.getElementById("categorie");

    for (let categoryItem of categoryList) {
        const option = document.createElement("option");
        option.textContent = categoryItem.name;
        option.value = categoryItem.id;
        selectCategory.appendChild(option);
    }
}
getSelectCategory();

// QUESTION 1: done in pieces, have not figured out yet how to tie it together
// SOLUTION 1 FORMDATA/ FETCH: 

// get the valid button so that the form can submit with eventListener
// 1.extract title, category and file input value

function validateFormInfo() {
    const fileUpload = document.getElementById('uploadImg');
    const fileToUpload = fileUpload.files[0];
    const titleInput = document.getElementById("titleInput").value;
    const categorySelectList = document.getElementById("categorieSelect").value;

    // validate that you have all values from form so that button can change
    if (fileToUpload) && (titleInput.length > 0) && (categorySelectList > 0)
    {
        changeValidateButtonColor()
        const formOK = true;
        return formOK
    } 
    else {
        const formOK = false;
        return formOk
    }
}

fileToUpload.addEventListener('change', {
    formOK = validateFormInfo()
})
titleInput.addEventListener('change', {
    formOK = validateFormInfo()
})
categorySelectList.addEventListener('change', {
    formOK = validateFormInfo()
})

function submitFormInfo() { // grabs form values(formdata) and submits
    
    // create formData which will be used in payload
    let formData = new FormData();
    // gets the file, title and category to upload,  appends the value and renames it
    formData.append('image', fileToUpload) // create the key: value pair of the file uploaded
    formData.append('image', 'uploadedImage');
    formData.append('title', titleInput )
    formData.append('title', 'newTitle');
    formData.append('category', categorySelectList)
    formData.append('category', 'newCategory');

    // send to server with formData
    const token = sessionStorage.getItem("token"); 
    fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: formData,
    }).then((res) => {
        if (res.ok) {
            console.log('success');
        } else {
            throw new Error('Error status code: ' + res.status);
        }
    }).catch((error) => {
        console.log(error.message);
    });
} // closes submitFormInfo function
            
// get form, then use event listener to extract form input, create payload and use it in fetch
const formInformation = document.getElementById('inputForm');
formInformation.addEventListener('submit', (e) => {
    e.preventDefault();
    formOK = false;
    formOK = validateFormInfo();
    if (formOK) {
        submitFormInfo()
    }
})

//  GO BACK BUTTON --> ADD EVENTLISTENER, CLICK, FUNCTION IS GOING TO IDENTIFY THE ID OF MODAL1 (modalPopup ID)

const modal1 = document.getElementById("modal_formContainer");
modal1.addEventListener("click", changeModal1)

function changeModal1() {
    document.getElementById("modalPopup").style.display = "";
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
