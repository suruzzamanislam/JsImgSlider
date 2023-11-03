

let picture = [
    "product1.jpg",
    "product2.jpg",
    "product3.jpg",
    "product4.jpg",
    "product5.jpg",
    "product6.jpg",
    "product7.jpg",
    "product8.jpg",
    "product9.jpg",
    "product10.jpg",
]

let color = [
    "red",
    "aqea",
    "pink",
    "yello",
    "black",
    "gray",
    "purple"
]


let body = document.querySelector("body")
let btns = document.querySelectorAll(".btn")
let frame = document.querySelector(".container")
let count = 0;
btns.forEach(function (button){
    button.addEventListener("click", function(e){
        
        if(button.classList.contains("btn-left")){
            count--
            if(count < 0){
                count = picture.length - 1
            }
            frame.style.background = `url(img/${picture[count]})`
            let colorIndex =  parseInt(Math.random() * color.length)
            body.style.backgroundColor = color[colorIndex]
        }

        if(button.classList.contains("btn-right")){
            count++
            if(count >= picture.length){
                count = 0;
            }
            frame.style.background = `url(img/${picture[count]})`
            let colorIndex =  parseInt(Math.random() * color.length)
            body.style.backgroundColor = color[colorIndex]
        }
    })
})