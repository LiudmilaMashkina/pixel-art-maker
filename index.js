
let current_color = null;

const canvas = document.querySelector(".canvas")

for(let i = 0; i < 400; i++){
    const div = document.createElement('div')
    div.setAttribute('data-id', i)
    div.classList.add('pixel')
    canvas.appendChild(div)
}

canvas.addEventListener('click', function(event){
    if(event.target.classList.contains('pixel')){
        paintPixel(event);
    }
})

const colors = ['red', 'green', 'yellow', 'blue', 'black', 'white']

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
    event.target.classList.add(current_color);
}

function getColor(event) {
    current_color = event.target.classList.value.split(' ').filter(function(ele){ return ele !== 'paint'})[0]
}