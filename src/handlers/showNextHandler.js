import { data, dom } from '../data.js';
import updateSlide from '../components/updateSlide.js';

const showNextHandler = () => {
    // show previous button
    dom.prevBtn.classList.remove('hide');
    data.counter++;

    if (data.counter === data.slides.length - 1) {
        dom.nextBtn.classList.add('hide');
    }
    const nextSlideData = data.slides[data.counter];
    updateSlide(nextSlideData);
};

export default showNextHandler;
