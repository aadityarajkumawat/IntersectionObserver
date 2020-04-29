const listOfImages = document.querySelectorAll('.images');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
}

let pervRatio = 0.0;

let handelIntersection = (enteries, obeserver) => {
    enteries.forEach(entry => {
        if (entry.intersectionRatio > pervRatio) {
            entry.target.classList.add('fade-in');
        }
        pervRatio = entry.intersectionRatio;
    });
}

let obeserver = new IntersectionObserver(handelIntersection, options);
for (let image of listOfImages) {
    obeserver.observe(image)
}
