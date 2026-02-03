// Script principal do Portfolio
document.addEventListener('DOMContentLoaded', function() {

    // ===== Menu Mobile =====
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    // ===== Formulário de contato (simulação) =====
    const contactForm = document.querySelector('.contato-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value || 'Anônimo';
            alert(`Obrigada, ${name}! Sua mensagem foi enviada com sucesso.`);
            this.reset();
        });
    }

    // ===== Atualizar ano no footer =====
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===== Efeito de digitação no título =====
    // ===== Efeito de digitação no título =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const firstName = "Ana Carolina";
    const lastName = "Itacarambi";
    let i = 0;
    let j = 0;
    
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        highlight.innerHTML = '';
        
        // Função para digitar o primeiro nome
        function typeFirstName() {
            if (i < firstName.length) {
                highlight.innerHTML += firstName.charAt(i);
                i++;
                setTimeout(typeFirstName, 100);
            } else {
                // Adiciona quebra de linha após o primeiro nome
                highlight.innerHTML += '<br>';
                // Pequena pausa antes de começar o sobrenome
                setTimeout(typeLastName, 300);
            }
        }
        
        // Função para digitar o sobrenome
        function typeLastName() {
            if (j < lastName.length) {
                highlight.innerHTML += lastName.charAt(j);
                j++;
                setTimeout(typeLastName, 100);
            }
        }
        
        // Inicia o efeito após 1 segundo
        setTimeout(typeFirstName, 1000);
    }
} 
        // ===== Toggle de tema claro/escuro =====
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    // Lê tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');

    // Se não houver tema salvo, define "dark" como padrão
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode'); // força dark
        localStorage.setItem('theme', 'dark');       // garante persistência
    }

    // Alterna tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}
    // ===== Animações on scroll =====
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animation = element.dataset.animation;
                    const delay = parseInt(element.dataset.delay) || 0;
                    setTimeout(() => {
                        element.classList.add('animated');
                        if (animation) element.style.animation = `${animation} 0.8s ease-out forwards`;
                    }, delay);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animatedElements.forEach(el => observer.observe(el));
    }
    initScrollAnimations();

    // ===== Animar barras de habilidade =====
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const value = bar.dataset.width || 0;  // usar "width" e não "progress"
                    bar.style.width = value + '%';         // adicionar '%' para funcionar
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.1 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    animateSkillBars();

});
