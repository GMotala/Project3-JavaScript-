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

        // create category attribute within each figure -->  dataset attribute

        // loop through the categories
        // create button element and append to figure add data attribute --> added class instead
/*
        const button = document.createElement('button'); // creates button tag
        button.setAttribute("class", "buttonClassName")
    }


}*/

/* 
// Button to filter
// const button = document.getElementById('button');
// QUESTION: button is defined in the function above, so can I carry it over to this function ? It is now in the DOM so yes, it already exists. 
// let buttons = document.querySelectorAll('.button'); // finding the button on each figure - but they will all be the same */

/*button.addEventListener('click', () => {
    const allCategories = 
    }) */