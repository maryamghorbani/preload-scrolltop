document.addEventListener('DOMContentLoaded', function () {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
});

const backToTop = document.getElementById('backToTop')

backToTop.addEventListener('click', function () {
    scrollTop (0 , 1500);
})

function scrollTop (scroll , duration) {
    let currentTime = duration;
    let animate = () => {
        if (currentTime <= 0) return;
        setTimeout(() => {
            currentTime -= 100;
            console.log(currentTime);
            animate()
        },100)
    }

    animate()
}

window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop > 250) {
        backToTop.style.display = 'flex'
    } else {
        backToTop.style.display = 'none'
    }
})