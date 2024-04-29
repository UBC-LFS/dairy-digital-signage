let interval = 5000
let curr = 0;
let slides = document.getElementsByClassName("mySlides");
slides[0].style.opacity = 1;  // Start first image as visible

function showSlides() {
    let next = (curr + 1) % slides.length;
    slides[curr].style.opacity = 0;  // Current slide fades out
    slides[next].style.opacity = 1;  // Next slide fades in
    curr = next;
    setTimeout(showSlides, interval);
}
setTimeout(showSlides, interval);