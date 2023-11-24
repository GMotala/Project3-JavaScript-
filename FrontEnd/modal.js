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

 // FETCH THE CATEGORIES FROM THE API AND MAKE THE CATEGORIES AVAILABLE --> LOOP THROUGH
// --- Add category  ---
async function getSelectCategory() {
    const responseCategories = await fetch('http://localhost:5678/api/categories'); // reponse is the response from the server. fetch is the request. 
    console.log(responseCategories);
    const categoryList = await responseCategories.json();
    const selectCategory = document.getElementById("categorieSelect");

    for (let categoryItem of categoryList) {
        const option = document.createElement("option");
        option.textContent = categoryItem.name;
        option.value = categoryItem.id;
        selectCategory.appendChild(option);
    }
}
getSelectCategory();

// grabbing html elm so that we can manipulate the EL --> NOT getting the VALUE here. 
const fileUpload = document.getElementById('uploadImg');
const titleInput = document.getElementById("titleInput")
const categorySelectList = document.getElementById("categorieSelect")
// 1. set event listeners to cover the case when 1 of the inputs change in html
fileUpload.addEventListener('change', validateFormInfo)
titleInput.addEventListener('change', validateFormInfo)
categorySelectList.addEventListener('change', validateFormInfo)
changeValidateButtonGrey();

function changeValidateButtonGreen() {
    const greenButton = document.getElementById("validButton")
    greenButton.style.background = "green"
    greenButton.disabled = false
}
function changeValidateButtonGrey() {
    const greyButton = document.getElementById("validButton")
    greyButton.style.background = "grey";
    greyButton.disabled = true;
}

// make the click not work
const stopPropagation = function (e) {
    e.stopPropagation()
}

// get the valid button so that the form can submit with eventListener
// 1.extract title, category and file input value
function validateFormInfo() {

    // grabs the VALUES that is input the elms(file, title, category)
    const fileUpload = document.getElementById('uploadImg');
    const fileToUpload = fileUpload.files[0];
    const titleInput = document.getElementById("titleInput").value;
    const categorySelectList = document.getElementById("categorieSelect").value;

    // validate that you have all values from form so that button can change
    if (fileToUpload && titleInput.length > 0 && categorySelectList > 0)
    {
        changeValidateButtonGreen();
        const formOK = true;
        return formOK
    } 
    else {
        changeValidateButtonGrey();
        const formOK = false;
        return formOK
    }
}

// if button is green, submit the info, if not, show the grey button -----------  // 16 NOV
/*if (validateFormInfo() === changeValidateButtonGreen())
{
    const formInformation = document.getElementById('validButton');
    formInformation.addEventListener('click', (e) => {
        submitFormInfo()
    else {
            changeValidateButtonGrey();
        }
    })
}*/

// button must be enable(green) or disabled(grey)

function submitFormInfo() { // grabs form values(formdata) and submits
    alert('hello')
    const fileUpload = document.getElementById('uploadImg');
    const fileToUpload = fileUpload.files[0];
    const titleInput = document.getElementById("titleInput").value;
    const categorySelectList = document.getElementById("categorieSelect").value;
    // create formData which will be used in payload
    let formData = new FormData();
    // gets the file, title and category to upload,  appends the value and renames it
    formData.append('image', fileToUpload) // create the key: value pair of the file uploaded
    formData.append('image', 'uploadedImage');
    formData.append('title', titleInput)
    formData.append('title', 'newTitle');
    formData.append('category', categorySelectList)
    formData.append('category', 'newCategory');


    // NB 17 NOV   ADD THE  AUTHENTIFICATION STUFF

    // send to server with formData
    const token = localStorage.getItem("token");
    fetch('http://localhost:5678/api/works', { 
        method: "POST",
        Authorization: `Bearer ${token}`,
        headers: {
            "accept": "application/json",
            "Content-Type": "multipart/form-data"
        },
        body: formData,
    }).then((res) => {
        if (res.ok) {
            console.log('success');
        } else {
            console.log('something went wrong');
            throw new Error('Error status code: ' + res.status);
        }
    }).catch((error) => {
        console.log(error.message);
    }); // closes submitFormInfo function
}

// get form, then use event listener to extract form input, create payload and use it in fetch
const formInformation = document.getElementById('validButton');
formInformation.addEventListener('click', (e) => {
    alert('check event listener');
    e.preventDefault();
    formOK = false;
    formOK = validateFormInfo(); // covers the validateforminfo again, but not necessary (redundant)
    if (formOK) {
        submitFormInfo()
    }
})


/*
// add new work to list of works thanks to the POST + formData info
const newWork = submitFormInfo(formData);
// add the new work to the initial function that added all works and shows the list of all categ
addPhoto.add(newWork);
getSelectCategory();
// need to show the modal with the updated values you typed --> reuse const from above
// repeating code from above as not in the same scope: 
const fileUpload = document.getElementById('uploadImg');
const fileToUpload = fileUpload.files[0];
fileToUpload = "";
const titleInput = document.getElementById("titleInput").value;
titleInput = "";
const categorySelectList = document.getElementById("categorieSelect").value;
// unfinished */





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

// submit form
// disable button / put event listener only if form is complete --> so that form is submittable only when filled (and not before)
// button should not be clickable before the form is complete 