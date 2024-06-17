    const burgerMenu = document.getElementById('burger-menu');
    const leftMenu = document.querySelector('header .left_menu');
    const fixBg = document.querySelector('header .fix_bg');
    const closeBtn = document.querySelector('header .left_menu .close');
    const body = document.body;

    burgerMenu.addEventListener('click', function(event) {
        event.preventDefault();
        fixBg.style.display = 'block';
        fixBg.style.zIndex = '999'; // fixBg 요소의 z-index 설정
        leftMenu.classList.add('active');
        body.style.overflow = 'hidden'; // 스크롤 비활성화
        setTimeout(() => {
            leftMenu.style.transform = 'translateX(300px)';
        }, 10);
    });

    closeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        leftMenu.style.transform = 'translateX(-300px)';
        fixBg.style.opacity = '0';
        setTimeout(() => {
            leftMenu.classList.remove('active');
            fixBg.style.display = 'none';
            fixBg.style.opacity = '0.5';
            body.style.overflow = ''; // 스크롤 활성화
        }, 500);
    });
const nav_title = document.querySelectorAll('nav .title');

for(let i of nav_title){
    /* console.log(i, nav_title) */
    const subMenu = i.querySelector('.sub');
    i.addEventListener('mouseover',function(){
        if(subMenu){
            /* console.log(subMenu) */
            subMenu.classList.add('show')
        }
    })
    i.addEventListener('mouseout',function(){
        if(subMenu){
            /* console.log(subMenu) */
            subMenu.classList.remove('show')
        }
    })
    
}
