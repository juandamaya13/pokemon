let pantalla = document.getElementById("pantalla")
let pokemonfantasma =document.getElementById("pokemonfantasma")
let pokemonfuego =document.getElementById("fuego")

let vida1 = document.getElementById("vida1")
let vida2 = document.getElementById("vida2")

let dialogos=document.getElementById("dialogos")


let espectro={ 
    nombre:"Espectro",
    salud:100
}

let flame={
    nombre:"Flame",
    salud:75
}
vida1.textContent=espectro.salud
vida2.textContent=flame.salud

function contraataque(n){
    if(n=="uno"){
        pokemonfuego.classList.add("fuegoveloz")
        pokemonfantasma.classList.add("daño")
        espectro.salud=espectro.salud-13
        dialogos.textContent="Flame a utilizado el ataque Fuego veloz"

        setTimeout(function(){
            pokemonfuego.classList.remove("fuegoveloz")
            pokemonfantasma.classList.remove("daño")
        },1000)
    }
else if(n=="dos"){
    pokemonfuego.classList.add("metiorito")
    pokemonfantasma.classList.add("daño")
    espectro.salud=espectro.salud-18
    dialogos.textContent="Flame a utilizado el ataque Metiorito"

    setTimeout(function(){
        pokemonfuego.classList.remove("metiorito")
        pokemonfantasma.classList.remove("daño")
    },2000)
}

else if(n=="tres"){
    pokemonfuego.classList.add("fuegoresplandeciente")
    pokemonfantasma.classList.add("daño")
    espectro.salud=espectro.salud-20
    dialogos.textContent="Flame a utilizado el ataque fuego resplandeciente"

    setTimeout(function(){
        pokemonfuego.classList.remove("fuegoresplandeciente")
        pokemonfantasma.classList.remove("daño")
    },1000)
}
else if(n=="cuatro"){
    pokemonfuego.classList.add("incendiario")
    pokemonfantasma.classList.remove("daño")
    espectro.salud=espectro.salud-18
    dialogos.textContent="Flame a utilizado el ataque Incendiario"

    setTimeout(function(){
        pokemonfuego.classList.remove("incendiario")
        pokemonfantasma.classList.remove("daño")
    },2000)
}
 if(espectro.salud<1){
        vida1.textContent=0
        dialogos.textContent="Espectro se ha debilitado"
        pokemonfantasma.classList.add("debilitado")
        setTimeout(function(){
            pokemonfantasma.style.display="none"
        },1000)
    }
    else{
        vida1.textContent=espectro.salud
    }
}


function ataque(n) {
if(n=="uno"){
pokemonfantasma.classList.add("ataque1")
pokemonfuego.classList.add("daño")
flame.salud=flame.salud-15
dialogos.textContent="Espectro a utilizado el ataque espectral"

setTimeout(function(){
pokemonfantasma.classList.remove("ataque1")
pokemonfuego.classList.remove("daño")
},1000)
} 

else if(n=="dos"){
pokemonfantasma.classList.add("ataque2")
pokemonfuego.classList.add("daño")
flame.salud=flame.salud-17
dialogos.textContent="Espectro a utilizado el giro de la muerte"


setTimeout(function(){
    pokemonfantasma.classList.remove("ataque2")
    pokemonfuego.classList.remove("daño")
},1000)
}

else if(n=="tres"){
pokemonfantasma.classList.add("ataque3")
pokemonfuego.classList.add("daño")
flame.salud=flame.salud-20
dialogos.textContent="Espectro a utilizado el control mental"

setTimeout(function (){
    pokemonfantasma.classList.remove("ataque3")
    pokemonfuego.classList.remove("daño")
},1000)
}
else{
    pantalla.style.background="purple"

     pokemonfantasma.classList.add("ataque4")
     pokemonfuego.classList.add("daño")
    flame.salud=flame.salud-13
    dialogos.textContent="Espectro a utilizado el escudo"


        setTimeout(function(){
            pokemonfantasma.classList.remove("ataque4")
            pantalla.style.background="none"
            pokemonfuego.classList.remove("daño")
        },2100)
    }


    if(flame.salud<1){
        vida2.textContent=0
        dialogos.textContent="Flame se ha debilitado"
        pokemonfuego.classList.add("debilitado")
        setTimeout(function(){
            pokemonfuego.style.display="none"
        },1000)
    }
    else{
        vida2.textContent=flame.salud

        setTimeout(function() {
        
        contraataque(n)
    },2000)
    }

  
    

}




