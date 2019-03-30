

function paginaCargada(){

    var nombre = document.querySelector('.datos__nombre');
    var url = document.querySelector('.datos__url');
    var r = document.querySelector('.datos__r');
    var g = document.querySelector('.datos__g');
    var b = document.querySelector('.datos__b');
    var color = document.querySelector('.datos__color');
    var barra = document.querySelector('.datos__barra');
    var crear = document.querySelector('.datos__crear');
    var imgs = document.querySelector('.imgs');

function pintarBarra(){
    barra.style.backgroundColor= 'rgb('+r.value+','+g.value+','+b.value+')';
}

r.addEventListener('input', pintarBarra);
g.addEventListener('input', pintarBarra);
b.addEventListener('input', pintarBarra);

function crearPersona(){
    var personaNueva=document.createElement('div');
    imgs.appendChild(personaNueva);
    personaNueva.className='imgs__personas';
    personaNueva.style.backgroundImage='url('+url.value+')';
    personaNueva.style.border='2px solid rgb('+r.value+','+g.value+','+b.value+')';
    var nombrePersona=document.createElement('p');
    personaNueva.appendChild(nombrePersona);
    nombrePersona.className='imgs__nombre';
    nombrePersona.innerHTML=nombre.value;
    nombrePersona.style.color=color.value;
}

crear.addEventListener('click' , crearPersona);

}

window.addEventListener("load" , paginaCargada);

