
let current_color = null;
let is_mouse_down = false;

const canvas = document.querySelector(".canvas")

for(let i = 0; i < 400; i++){
    const div = document.createElement('div')
    div.setAttribute('data-id', i)
    div.classList.add('pixel')
    canvas.appendChild(div)
}

canvas.addEventListener('mousedown', function(event){
    is_mouse_down = true;
    if(event.target.classList.contains('pixel')){
        paintPixel(event);
        
    }
})

canvas.addEventListener('mouseover', function(event){
    if(event.target.classList.contains('pixel') && is_mouse_down){
        paintPixel(event);
    }
})

document.addEventListener('mouseup', function(event){
    is_mouse_down = false;
})

const colors = ['red', 'green', 'yellow', 'blue', 'black', 'white'];

const palet = document.querySelector(".palet");

for(const color of colors){
    const div = document.createElement('div');
        div.classList.add('paint');
        div.classList.add(color);
        palet.appendChild(div);
}

palet.addEventListener('click', function(event){
    if(event.target.classList.contains('paint')){
        getColor(event);
    }
})

function paintPixel(event) {
    event.target.style.background = current_color;
    event.target.style.outline = "0";
}

function getColor(event) {
    current_color = event.target.classList.value.split(' ').filter(function(ele){ return ele !== 'paint'})[0];
}