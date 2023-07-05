import { data, dom } from '../data.js';
import updateSlide from '../components/updateSlide.js';

const showPreviousHandler = () => {
    data.counter--;
    // show next button
    if (dom.nextBtn.classList.contains('hide')) {
        dom.nextBtn.classList.remove('hide');
    }
    if (data.counter === 0) {
        dom.prevBtn.classList.add('hide');
    }

    const previousSlideData = data.slides[data.counter];
    updateSlide(previousSlideData);
};

export default showPreviousHandler;
