
const themeBtn = document.querySelector('.dark-mode');
document.body.classList.toggle('dark-mode')

themeBtn.addEventListener('click', () =>{
    let element = document.body
    element.classList.toggle('dark-mode')
})

// FOR CHANGING BRAND COLORS
const brands = document.querySelectorAll('.brand-link')
var colors
var firstTimeout, secondTimeout, thirdTimeout, fouthTimeout;

brands.forEach(brand => {
    brand.addEventListener('mouseover', () => {
    
        colors = ["#000000", "#707070", "#A8A6A6"]
        clearTimeout(firstTimeout)
        clearTimeout(secondTimeout)
        clearTimeout(thirdTimeout)
        clearTimeout(fouthTimeout)
        console.log(brand)

        firstTimeout = setTimeout(function (){
            changeBrandColorInCycle(colors)
        }, 000)
        
        secondTimeout = setTimeout(function (){
            changeBrandColorInCycle(colors)
        }, 1000)
        
        thirdTimeout = setTimeout(function (){
            changeBrandColorInCycle(colors)
        }, 1500)
        fouthTimeout = setTimeout(function (){
            changeBrandColorInCycle(colors)
        }, 2000) 
                
    });
    
});

brands.forEach(brand => {
    brand.addEventListener('mouseleave', () => {

        resetBrandColorInCycle()
    })
})

function shiftColors(colors_param){
    
    const len = colors_param.length;
    const shiftedColors = [];

    for (let i = 0; i < len; i++) {
        const newIndex = (i + 1) % len;
        shiftedColors[newIndex] = colors_param[i];
    }
    colors = shiftedColors;

}

function changeBrandColorInCycle(colors_param){
    let me = document.querySelectorAll('.first-me')
    let ri = document.querySelectorAll('.first-ri')
    let no = document.querySelectorAll('.first-no')

    shiftColors(colors_param)
    console.log(colors_param)

    me.forEach(Me => {
        Me.style.color = colors_param[0]
    })
    ri.forEach(Ri => {
        Ri.style.color = colors_param[1]
    })
    no.forEach(No => {
        No.style.color = colors_param[2]
    })    
    
}

function resetBrandColorInCycle(){

    let me = document.querySelector('.first-me')
    let ri = document.querySelector('.first-ri')
    let no = document.querySelector('.first-no')
    
    let me_color = "#000000"
    let ri_color = "#707070"
    let no_color = "#A8A6A6"

    me.style.color = me_color
    ri.style.color = ri_color
    no.style.color = no_color
    
}
// END FOR CHANGING BRAND COLORS


// FOR CHANGING TEXT AND IMAGES PERMANENTLY
const dynamic_text = document.querySelector('#dynamic-text')
const dynamic_image = document.querySelector('#dynamic-image')
const texts = ["TRAINING !", "INNOVATION !", "AI APPLICATIONS !"]
const images= ["images/pic_training.png", "images/pic_merino.png", "images/pic_ai.png"]
var scan = 0


setInterval(changeDynamicText, 8000)

function changeDynamicText(){
    
    dynamic_text.innerHTML = texts[scan]
    dynamic_text.style.transition ="all 2s ease-in 1s"

    dynamic_image.src = images[scan]
    dynamic_image.style.transition = "all 2s ease-in 1s"

    scan = (scan + 1) % texts.length
}
// END FOR CHANGING TEXT AND IMAGES PERMANENTLY


// LET'S GO INTERACTION
const go = document.querySelector('#go')
const go_form = document.querySelector('#go-form')

go.addEventListener('click', () => {
    go_form.style.display = 'flex'
})