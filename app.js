const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: obtenerNumeroRandom(WIDTH),
    y: obtenerNumeroRandom(HEIGHT)
};

const map = document.getElementById("map")
const parrafo = document.getElementById("distance")
let clicks = 0

map.addEventListener("click",e =>{
    clicks++
    let distance = obtenerDistancia(e,target)
    let distancehint = obtenerDistanciaHint(distance)
    parrafo.innerHTML = distancehint
    console.log(`el objetivo esta en ${JSON.stringify(target)} y tu en (${e.offsetX},${e.offsetY})`)
    if (distance < 20){
        alert(`haz encontrado el tesoro en ${clicks} clicks`)
        location.reload()
    }
} )