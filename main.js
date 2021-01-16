function changeBg() {

    const images = [
        'url("img/1.jpg")',
        'url("img/2.jpg")',
        'url("img/3.jpg")',
        'url("img/4.jpg")',
        'url("img/5.jpg")',
    ]
    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(changeBg, 1000)