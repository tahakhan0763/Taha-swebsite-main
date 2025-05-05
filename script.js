
const fullscreen = document.getElementById('fullscreenCarousel');
const fullscreenImages = document.getElementById('fullscreenCarouselImages');
const closeBtn = document.getElementById('closeFullscreen');

document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', e => {
        const carousel = e.target.closest('.carousel');
        const items = carousel.querySelectorAll('.carousel-item img');

        fullscreenImages.innerHTML = '';

        items.forEach((img, index) => {
            const div = document.createElement('div');
            div.classList.add('carousel-item');
            if (img === e.target) div.classList.add('active');

            const newImg = document.createElement('img');
            newImg.src = img.src;
            newImg.className = 'd-block w-100';

            div.appendChild(newImg);
            fullscreenImages.appendChild(div);
        });

        fullscreen.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    fullscreen.classList.remove('active');
});


