let obtenerNumeroRandom = tamaño =>{
    return Math.floor(Math.random() * tamaño)
}
let obtenerDistancia = (e,target) =>{
    let diffx = e.offsetX - target.x
    let diffy = e.offsetY - target.y
    return Math.sqrt((diffx * diffx) + (diffy * diffy) )
}

let obtenerDistanciaHint = distancia =>{
    if(distancia < 30){
        return "hirviendo"
    }else if(distancia < 40){
        return "realmente caliente"
    }else if(distancia < 60){
        return "caliente"
    }else if(distancia < 100){
        return "calido"
    }else if(distancia < 180){
        return "frio"
    }else if(distancia < 360){
        return "helado"
    }else{
        return "congelado"
    }
}