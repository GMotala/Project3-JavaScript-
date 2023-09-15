/* const btns = document.querySelector(`.btns`);
const token = sessionStorage.accessToken;
const login = document.getElementById(`login`);
const displayModal = document.querySelector(`.modifier`);
const modalContainer = document.querySelector(`.modalOverlay`);
// const modal = document.getElementById(`modal1`);
const close = document.querySelectorAll(".close");
const worksContainer = document.querySelector(`.worksContainer`);
const delButton = document.querySelector(`.delete`);
const addWork = document.querySelector(`.addWork`);
let arrWorks = []; */

let modal = null // will know which is the modal that is open --> see line 23 to open

const openModal = function () {
    const modal = document.getElementById('modalOverlay')
    modal.style.display = "block"
    // e.preventDefault()
    // if (modal === null) return 
    /* const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    // hides modal - display flex takes over
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    // modal = target*/

    // closes the modal by getting the overlay    
    /* modal.addEventListener('click', closeModal)
    modal.querySelector('js-modal-close').addEventListener('click', closeModal) // close the modal when opened */
    // modal.querySelector('js-modal-close').addEventListener('click', stopPropogation) // stops the clicking anywhere
} // end of open modal


const closeModal = function () {
    // e.preventDefault()
    const modal = document.getElementById('modalOverlay')
    modal.style.display = "none"
    /* modal.setAttribute('aria-hidden', true)
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('js-modal-close').removeEventListener('click', stopPropogation)
    modal = null*/ 
}


/*document.querySelector('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
    e.target.getAttribute('href')
})

const stopPropogation = function (e) {
    e.stopPropogation()
}*/


/* function showModal() {
    e.preventDefault()
    displayModal.addEventListener("click", function (e) {
        modalContainer.style.display = "flex";
        modal.style.display = `flex`;
    });
} */

// --- Show gallery in the modal ---

async function showWorksInModal() {
    arrWorks = await getProjects();

    arrWorks.forEach((work) => {
        const figureModal = document.createElement(`figure`);
        const figureImgModal = document.createElement(`img`);
        const editButton = document.createElement(`button`);
        const delButton = document.createElement(`button`);
        figureImgModal.src = work.imageUrl;
        figureImgModal.alt = work.title;
        editButton.innerText = `editer`;
        editButton.classList.add(`editer`);
        delButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        delButton.classList.add(`delete`);
        delButton.addEventListener("click", function () {
            confirmDelWork(work.id);  // make function elsewhere
        });
        worksContainer.appendChild(figureModal);
        figureModal.append(figureImgModal, editButton, delButton);
    });
    showModal();
}

showWorksInModal();
// add show modal inside the showWorksInModal , in order for all functions to be shown

// add photo outline --> 2nd modal
async function addPhoto() {

}

// show include value of photo modal --> 3rd modal
async function addPhotoValues() {
}

// event listener that calls showWorksInModal() 
// event listener inside modal for other forms to show up


// modal is the actual popup
// modal is a pop managed by html / css/ js --> a rendering
// overlay --> big one
// modal -> the opaque ingo

// create the modal in css
// instead of using onlick in html, use the addEventListener to open and to remove event listener, and then close with eventlistener