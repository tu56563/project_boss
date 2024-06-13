document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav .gnb .title');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const subMenu = this.querySelector('.sub');
            if (subMenu) {
                subMenu.style.display = 'block';
                setTimeout(() => {
                    subMenu.classList.add('show');
                }, 0);
            }
        });

        item.addEventListener('mouseout', function() {
            const subMenu = this.querySelector('.sub');
            if (subMenu) {
                subMenu.classList.remove('show');
                setTimeout(() => {
                    subMenu.style.display = 'none';
                }, 500);
            }
        });
    });
});
document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    });
});