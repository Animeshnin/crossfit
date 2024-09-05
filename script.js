const burger = document.querySelector('.header-burger-button');
const headerMenu = document.querySelector('.header__menu')
burger.addEventListener('click', () => {
    let screenWidth = window.screen.width
    console.log(burger)

    if (screenWidth <= 1024){
            headerMenu.classList.toggle('transformation');
            burger.classList.toggle('close')



    }
})


// Функция debounce
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('scroll', debounce(function() {
    headerMenu.classList.remove('transformation')
}, 100)); // 100 миллисекунд задержки