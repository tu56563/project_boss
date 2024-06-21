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
// =================================================
const nav_title = document.querySelectorAll('nav .title');

for(let i of nav_title){
    // nab_title에 있는 요소들 반복문 실행
    /* console.log(i, nav_title) */
    const subMenu = i.querySelector('.sub');
    i.addEventListener('mouseover',function(){
        if(subMenu){
            /* console.log(subMenu) */
            subMenu.classList.add('show')
            /* subMenu에 show 클래스 추가하여 활성화 */
        }
    })
    i.addEventListener('mouseout',function(){
        if(subMenu){
            /* console.log(subMenu) */
            subMenu.classList.remove('show')
            /* subMenu에 show 클래스 제거하여 숨김 */
        }
    })
    
}
// .detail_nav li a 액티브컬러
const tabs = document.querySelectorAll('.detail_nav li a');

tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
        // a태그 페이지 이동 막기
        event.preventDefault();
        // 모든 탭의 active 클래스 제거
        tabs.forEach(tab => tab.classList.remove('active'));
        // 클릭한 탭에 active 클래스 추가
        this.classList.add('active');
    });
});
// .review_ranking li a 밑줄
const ranking = document.querySelectorAll('.review_ranking li a');

ranking.forEach(rank => {
    rank.addEventListener('click', function(event) {
        event.preventDefault();
        ranking.forEach(rank => rank.classList.remove('underline'));
        this.classList.add('underline');
    })
})

