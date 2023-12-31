images = [
    {
        src: "icons8-whatsapp-50.png",
        href: "https://wa.me/966570708311"

    },
    {

        src: "icons8-linkedin-50.png",
        href: "https://www.linkedin.com/in/abdullah-alfateel-2755a3294/"

    },
    {

        src: "icons8-github-50.png",
        href: "https://github.com/afateel2"

    },
    {


        src: "icons8-instagram-50.png",
        href: "https://www.instagram.com/afateel2"

    },
    {

        src: "icons8-twitterx-50.png",
        href: "https://twitter.com/A2F_FL"

    },

]

// JS 2 Exercise 1
let div = document.createElement('div')
div.classList.add("iconBar")
images.forEach(element => {
    let image = document.createElement("img")
    image.classList.add("icons")
    image.src = element.src
    let anchor = document.createElement("a")
    anchor.href = element.href
    anchor.appendChild(image)
    div.appendChild(anchor)
});
document.querySelector("#iconsDiv").appendChild(div)

function loadImage() {

    fetch("h")
        .then(response => response.json())
        .then(data => {

            return data.urls.raw

        })

}

// JS 3 Exercise 1
imgs = document.querySelectorAll('#fetPics img');
imgs.forEach(imag => {
    fetch("https://api.unsplash.com/photos/random?query=space&per_page=8&client_id=D5P-LSTm4K7vmyPVnw-Lmj9SpjiVichInWGM5vY7JQQ1") //Delete 1
        .then(response => response.json())
        .then(data => {

            imag.src = data.urls.raw

        })

})
//JS 4 Exercise 1
//-> Part 1
class myProjects {
    constructor(project){
        this.src1 = project.src1;
        this.title1 = project.title1;
        this.date1= project.date1;
        this.src2 = project.src2;
        this.title2 = project.title2;
        this.date2 = project.date2;
    }
}

//->JS 4 Exercise 2 Part 1 from the line below changed to function expressions
let addFigures = function(projects) {
    let divA = document.querySelector('#MyProjects');
    projects.forEach(function(project) {
        let aProject = new myProjects(project);
        divA.appendChild(createFigure(aProject));
    });
};
let createFigure = function(proj) {
    let figureString =
    `
    <div class="prImg">
        <span>A</span>
        <img src=${proj.src1}>
        <div class="TitleNDate"><p>[Title: ${proj.title1}</p><p>Date:${proj.date1}]</p></div>
    </div>
    <div class="prImg">
        <span>A</span>
        <img src=${proj.src2}>
        <div class="TitleNDate"><p>[Title: ${proj.title2}</p><p>Date:${proj.date2}]</p></div>
    </div>   
    `;
    let fig = document.createElement('figure');
    fig.id = "projImgs";
    fig.innerHTML = figureString;
    return fig;
};
//Till here <-


//->JS 4 Exercise 1 Part 2
const projects = [
    {
        src1: "a77c0264-7fcc-423e-87b6-b06aaa6b648f.jpg",
        src2: "hangGame.PNG",
        title1: "Torno",
        title2: "Hangman",
        date1: "2022",
        date2: "2023"
    }
]
//Populating html
addFigures(projects);


//JS 5 Exercise 2
// import { createApp } from 'vue'
// import work from 'app.vue'

// createApp(work).mount('#MyWork')




