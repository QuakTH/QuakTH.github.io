var slideIndex = 1;

function showDivs(n) {
    slideIndex += n;
    var slides = document.getElementsByClassName('description_box');
    var pages = document.getElementById('slide_num').childNodes;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        pages[2 * i + 1].classList.remove('selected')
    }
    slides[slideIndex - 1].style.display = 'block';
    pages[2 * slideIndex - 1].classList.add('selected')
}