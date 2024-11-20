const botaoAbrir = document.querySelector(".header-mobile > button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)

function abrirMenu() {
    body.classList.add("escurecer")

}