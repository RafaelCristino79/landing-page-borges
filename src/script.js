// Verifica se a tela é de um dispositivo móvel
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Adiciona uma transição suave para a navbar
navbar.style.transition = "top 0.3s ease";

// Manipula o evento de scroll
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - esconder navbar
        navbar.style.top = isMobile() ? "-100px" : "-100px";
    } else {
        // Scroll para cima - mostrar navbar
        navbar.style.top = "0";
    }

    // Alternar entre a classe transparente e a sólida dependendo da posição do scroll
    if (scrollTop > 0) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }

    lastScrollTop = scrollTop;
});




//menu responsivo

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.noScrollClass = "no-scroll"; // Classe para bloquear o scroll

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);

        // Se o menu está ativo, bloquear o scroll
        if (this.navList.classList.contains(this.activeClass)) {
            document.body.classList.add(this.noScrollClass);
            document.addEventListener("click", this.handleOutsideClick); // Adiciona o evento para detectar cliques fora
        } else {
            document.body.classList.remove(this.noScrollClass);
            document.removeEventListener("click", this.handleOutsideClick); // Remove o evento quando o menu fecha
        }
    }

    handleLinkClick() {
        // Fechar o menu e desbloquear o scroll quando um link é clicado
        this.navList.classList.remove(this.activeClass);
        document.body.classList.remove(this.noScrollClass);
        document.removeEventListener("click", this.handleOutsideClick); // Remove o evento quando o menu fecha
    }

    handleOutsideClick(event) {
        // Verificar se o clique foi fora do menu
        if (!this.navList.contains(event.target) && !this.mobileMenu.contains(event.target)) {
            this.navList.classList.remove(this.activeClass);
            document.body.classList.remove(this.noScrollClass);
            document.removeEventListener("click", this.handleOutsideClick); // Remove o evento quando o menu fecha
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    addLinkEvents() {
        this.navLinks.forEach(link => {
            link.addEventListener("click", this.handleLinkClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        if (this.navLinks.length > 0) {
            this.addLinkEvents();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".nav-hamburguer",
    ".nav-list-mobile",
    ".nav-list-mobile li"
);

mobileNavbar.init();


// função para o botão de subir

// script.js
window.addEventListener('scroll', function() {
    let scrollButton = document.querySelector('.up-button');
    let scrollButtonShadow = document.querySelector('.up-button-shadow');
    
    if (window.scrollY > 100) {
        scrollButton.classList.add('show');
        scrollButtonShadow.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
        scrollButtonShadow.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


