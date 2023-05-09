const menu =document.querySelector('.menu')
const fecharMenu = document.querySelector(".fechar-menu")
const abrirMenu = document.querySelector(".abrir-menu")

abrirMenu.addEventListener("click",show)
fecharMenu.addEventListener("click",fechar)

function show(){
    menu.style.display = 'flex'
    menu.style.top = '0%'
}
function fechar(){
    menu.style.top = ("-120%")
}

