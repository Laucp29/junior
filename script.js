function handlerEvents(){
    let botonAbrir = document.getElementById('botonAbrir');
    let botonCerrar = document.getElementById('botonCerrar');
    let colleccionAbrir = document.getElementById('elementoLista1');
    let verSillon = document.getElementById('opcionLista1');
   let botonSilla = document.getElementById('botonSilla');
   let botonMesa = document.getElementById('botonMesa');
    
   


    botonAbrir.addEventListener('click',handlerAbrir);
    botonCerrar.addEventListener('click',handlerCerrar);
    colleccionAbrir.addEventListener('click',handlerColleccionA);
    verSillon.addEventListener('click', handlerSillon);
    botonSilla.addEventListener('click', handlerSilla);
    botonMesa.addEventListener('click', handlerMesa);
   

}

//MENU PRINCIPAL
function handlerAbrir(){
    let logo = document.getElementById('logo')
    let menu = document.getElementById('contenedorNav');
    menu.style.width = '100%';
    logo.style.color = 'white' ;
}

function handlerCerrar(){
    let logo = document.getElementById('logo')
    let menu = document.getElementById('contenedorNav');
    menu.style.width = '0';
    logo.style.color = 'black';
}
//MENU SECUNDARIO
function handlerColleccionA(){
    let miniMenu = document.getElementById('lista2');
    miniMenu.classList.toggle('aparecer');

}
//SILLON MENU
function handlerSillon(){
    let sillon = document.getElementById('sillon')
    sillon.classList.toggle('sillonArriba');
}

//SILLA Y MESA
function handlerSilla(){
    let prod1 = document.getElementsById('produtoSilla');
    let prod2 = document.getElementsById('produtoMesa');

    prod1.style.display = 'grid';
    prod2.style.display = 'none';

}
function handlerMesa(){
    let prod1 = document.getElementsById('produtoSilla');
    let prod2 = document.getElementsById('produtoMesa');

    prod1.style.display = 'none';
    prod2.style.display = 'grid';

}





window.onload = handlerEvents;