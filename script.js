// ACORDION
const accordions = document.querySelectorAll(".accordion"); 
accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const body = accordion.querySelector(".accordion-body");    
        const icon = accordion.querySelector(".accordion-header i");
        body.classList.toggle("active");
        icon.classList.toggle("active");
        if (body.classList.contains("active")) {
            body.style.height = body.scrollHeight + "px"; // Define a altura do corpo para o scrollHeight
        } else {
            body.style.height = "0"; // Reseta a altura para 0 quando não está
            body.style.padding = "0"; // Reseta o padding para 0 quando não está ativo
        }
        // Alterna a classe de ícone para mostrar o ícone correto   
        if (icon.classList.contains("active")) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }   
    });
});

// CARROSSEL
const carrosselSlide = document.querySelector(".slideCarrossel");
const carrosselImagens = document.querySelectorAll(".slideCarrossel img");
const avancaBtn = document.querySelector(".avancaCarrossel");
const voltaBtn = document.querySelector(".voltaCarrossel");

let indice = 0;
let larguraSlide = carrosselImagens[0].clientWidth;

function moveSlide() {
    carrosselSlide.style.transform = "translateX(" + (-larguraSlide * indice) + "px)"
}

avancaBtn.addEventListener("click", () => {
    if (indice >= carrosselImagens.length - 1) {
        return;
    }
    indice++;
    moveSlide();
});

voltaBtn.addEventListener("click", () => {
    if (indice <= 0) {
        return;
    }
    indice--;
    moveSlide();
});
// FORMATAÇÃO DA MASCARA DO TELEFONE
function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos
    var telefone = input.value.replace(/\D/g, '');

    // Insere os parênteses, espaço e traço nos lugares corretos
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');

    // Atualiza o valor do campo de entrada com o telefone formatado
    input.value = telefone;
}
// VALIDAÇÃO DO FORMULÁRIO
const meuFormulario = document.getElementById("meuFormulario");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const mensagemFormulario = document.getElementById("mensagemFormulario");

const padraoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

meuFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let eValido = true;

    if (nomeInput.value.trim() === "") {
        erroNome.textContent = "Nome obrigatório";
        eValido = false;
    } else {
        erroNome.textContent = "";
    }

    if (emailInput.value.trim() === "") {
        erroEmail.textContent = "E-mail obrigatório";
        eValido = false;
    } else if (!padraoEmail.test(emailInput.value)) {
        erroEmail.textContent = "Por favor, Insira um E-mail válido";
        eValido = false;
    } else {
        erroEmail.textContent = "";
    }
    if (eValido) {
        mensagemFormulario.textContent = "Formulário enviado com sucesso."
        mensagemFormulario.style.color = "green";
        meuFormulario.reset();
    } else {
        mensagemFormulario.textContent = "Por favor, corrija os dados do formulário."
        mensagemFormulario.style.color = "red";
    }
});

// MENU MOBILE
document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = menuMobile.querySelector('.btn-fechar');
    const overlayMenu = document.getElementById('overlay-menu');

    btnMenu.addEventListener('click', function () {
        menuMobile.classList.add('aberto');
        overlayMenu.classList.add('ativo');
    });

    btnFechar.addEventListener('click', function () {
        menuMobile.classList.remove('aberto');
        overlayMenu.classList.remove('ativo');
    });

    overlayMenu.addEventListener('click', function () {
        menuMobile.classList.remove('aberto');
        overlayMenu.classList.remove('ativo');
    });
});