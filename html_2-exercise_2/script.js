images = [
    {
        src:"assets/icons8-whatsapp-50.png",
        href:"https://wa.me/966570708311"
 
    },
    {
        
    src:"assets/icons8-linkedin-50.png",
    href:"https://www.linkedin.com/in/abdullah-alfateel-2755a3294/"
    
    },
    {

    src:"assets/icons8-github-50.png",
    href:"https://github.com/afateel2"
    
    },
    {

  
    src:"assets/icons8-instagram-50.png",
    href:"https://www.instagram.com/afateel2"
  
    },
    {

        src:"assets/icons8-twitterx-50.png",
        href:"https://twitter.com/A2F_FL"
        
    },
    
]
/*
        <a href="https://wa.me/966570708311"><img class="icons" src="assets/icons8-whatsapp-50.png" alt=""> </a>
        <a href="https://www.linkedin.com/in/abdullah-alfateel-2755a3294/"> <img class="icons" src="assets/icons8-linkedin-50.png" alt=""> </a>
        <a href="https://github.com/afateel2"> <img class="icons" src="assets/icons8-github-50.png" alt=""> </a>
        <a href="https://www.instagram.com/afateel2"> <img class="icons" src="assets/icons8-instagram-50.png" alt=""> </a>
        <a href="https://twitter.com/A2F_FL"> <img class="icons" src="assets/icons8-twitterx-50.png" alt=""> </a>
*/
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