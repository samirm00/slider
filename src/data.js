export const data = {
    slides: [
        {
            id: 1,
            src: '../assets/img1.jpeg',
            alt: 'img1',
            imgClass: 'slide-img',
        },
        {
            id: 2,
            src: '../assets/img2.jpeg',
            alt: 'img2',
            imgClass: 'slide-img',
        },
        {
            id: 3,
            src: '../assets/img3.jpeg',
            alt: 'img3',
            imgClass: 'slide-img',
        },
        {
            id: 4,
            src: '../assets/person1.jpeg',
            alt: 'img4',
            name: 'susan doe',
            imgClass: 'person-img',
        },
    ],
    counter: 0,
};

export const dom = {
    nextBtn: document.querySelector('.nextBtn'),
    prevBtn: document.querySelector('.prevBtn'),
    sliders : document.querySelector('.slider-container')
};
