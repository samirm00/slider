const createSlide = (slideData) => {
    // create slide
    const slide = document.createElement('div');
    slide.classList.add('slide');

    // create img
    const img = document.createElement('img');
    img.src = slideData.src;
    img.alt = slideData.alt;
    img.id = 'slideImg';
    img.classList.add(slideData.imgClass);

    // name
    const name = document.createElement('h4');
    name.id = 'name';
    if (slideData.name) {
        name.innerText = slideData.name;
    } else {
        name.classList.add('hidden');
    }
    // create number
    const slideNumber = document.createElement('h2');
    slideNumber.id = 'slideNumber';

    slideNumber.innerText = slideData.id;

    // append
    slide.append(img, name, slideNumber);

    return slide;
};

export default createSlide;
