import * as flsFunctions from "./modules/function.js";
import { createPagination, updateSlider } from "./modules/slider.js";

flsFunctions.checkWebPSupport();

createPagination();
updateSlider();

import Swiper, { Navigation, Pagination } from "swiper"; // Подключение слайдера (библиотека)
