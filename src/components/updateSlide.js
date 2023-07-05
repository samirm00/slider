const updateSlide = (slideData) => {
    const img = document.getElementById('slideImg');
    img.src = slideData.src;
    img.alt = slideData.alt;

    const name = document.getElementById('name');
    if (slideData.name) {
        name.innerText = slideData.name;
        name.classList.remove('hidden');
    } else {
        name.classList.add('hidden');
    }

    const number = document.getElementById('slideNumber');
    number.innerText = slideData.id;
};

export default updateSlide;
