document.addEventListener('DOMContentLoaded', function () {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
});

const backToTop = document.getElementById('backToTop')

window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop > 250) {
        backToTop.style.display = 'flex'
    } else {
        backToTop.style.display = 'none'
    }
})