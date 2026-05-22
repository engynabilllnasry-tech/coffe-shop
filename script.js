window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});