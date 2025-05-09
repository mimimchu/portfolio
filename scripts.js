const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // マイナスを防ぐ
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});