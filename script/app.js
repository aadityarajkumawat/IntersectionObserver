const listOfImages = document.querySelectorAll('.images');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01,
}

let pervRatio = 0.0;

let handelIntersection = (enteries) => {
    enteries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
        }
    });
}

let obeserver = new IntersectionObserver(handelIntersection, options);
for (let image of listOfImages) {
    obeserver.observe(image);
}
