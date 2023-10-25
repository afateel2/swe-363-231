images = [
    {
        src: "assets/icons8-whatsapp-50.png",
        href: "https://wa.me/966570708311"

    },
    {

        src: "assets/icons8-linkedin-50.png",
        href: "https://www.linkedin.com/in/abdullah-alfateel-2755a3294/"

    },
    {

        src: "assets/icons8-github-50.png",
        href: "https://github.com/afateel2"

    },
    {


        src: "assets/icons8-instagram-50.png",
        href: "https://www.instagram.com/afateel2"

    },
    {

        src: "assets/icons8-twitterx-50.png",
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
    fetch("https://api.unsplash.com/photos/random?query=space&per_page=8&client_id=D5P-LSTm4K7vmyPVnw-Lmj9SpjiVichInWGM5vY7JQQ")
        .then(response => response.json())
        .then(data => {

            imag.src = data.urls.raw

        })

})


