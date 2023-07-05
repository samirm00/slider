import { data, dom } from './data.js';
import createSlide from './components/createSlide.js';
import './listeners/showNextListener.js';
import './listeners/showPreviousListener.js';

// by default show the first slide
const firstSlideData = data.slides[data.counter];
const slideDom = createSlide(firstSlideData);
dom.sliders.append(slideDom);
