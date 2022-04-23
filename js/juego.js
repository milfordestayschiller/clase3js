// Se declaran las variables piedra, papel o tijera como numeros y se realizan las funciones separadas para los respectivos botones las 3 funciones tienen la misma logica, ademas se declara el ciclo while en cada una para una mayor interactividad que con prompts

function jugar(piedra) {
    var piedra = 0;
    piedra = document.getElementById("piedra").value;
   
    var numeroAletorio = Math.floor(Math.random()*3);
    while(piedra == numeroAletorio || piedra == 0 && numeroAletorio == 1 || piedra == 0 && numeroAletorio == 2) {
if (numeroAletorio == 0) {
    alert("La maquina a elegido piedra")
}
if (numeroAletorio == 1) {
    alert("La maquina a elegido papel")
}
if (numeroAletorio == 2) {
    alert("La maquina a elegido tijera")
}

if(numeroAletorio == piedra){
   alert("Has empatado")
}
if(piedra == 0 && numeroAletorio == 1  ){
    alert ("pierdes")
}
 else if (piedra == 0 && numeroAletorio == 2)    {
alert("ganaste")
}
alert("Desea volver a jugar?, para ello solo has click en Piedra, Papel o Tijera nuevamente ")

    return piedra;

}

}

function jugar2(papel) {
    var papel = 1;
    papel = document.getElementById("papel").value;
   
    var numeroAletorio = Math.floor(Math.random()*3);
    while(numeroAletorio == papel || papel == 1 && numeroAletorio == 2 || papel == 1 && numeroAletorio == 0) {
if (numeroAletorio == 0) {
    alert("La maquina a elegido piedra")
}
if (numeroAletorio == 1) {
    alert("La maquina a elegido papel")
}
if (numeroAletorio == 2) {
    alert("La maquina a elegido tijera")
}

if(numeroAletorio == papel){
   alert("Has empatado")
}
else if(papel == 1 && numeroAletorio == 2  ){
    alert ("pierdes")
}
 else if (papel == 1 && numeroAletorio == 0)    {
alert("ganaste")
}

alert("Desea volver a jugar?, para ello solo has click en Piedra, Papel o Tijera nuevamente ")
    return papel;
}
}

function jugar3(tijera) {
    var tijera = 2;
    tijera = document.getElementById("tijera").value;
   
    var numeroAletorio = Math.floor(Math.random()*3);
    while (numeroAletorio == tijera || tijera == 2 && numeroAletorio == 0 || tijera == 2 && numeroAletorio == 1) {
        

if (numeroAletorio == 0) {
    alert("La maquina a elegido piedra")
}
if (numeroAletorio == 1) {
    alert("La maquina a elegido papel")
}
if (numeroAletorio == 2) {
    alert("La maquina a elegido tijera")
}

if(numeroAletorio == tijera){
   alert("Has empatado")
}
else if(tijera == 2 && numeroAletorio == 0){
    alert ("pierdes")
}
 else if (tijera == 2 && numeroAletorio == 1)    {
alert("ganaste")
}

alert("Desea volver a jugar?, para ello solo has click en Piedra, Papel o Tijera nuevamente ")
    return tijera;
}

}







   
        

        
        
        
    
    





 