import img1 from '../../img/shelter1.webp'
import img2 from '../../img/shelter2.jpg'
import img3 from '../../img/shelter3.webp'
import { Navigation, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './slider.css' 
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
  return (
    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      <SwiperSlide className='slide'><img src={img1} alt=""/></SwiperSlide>
      <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
      <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
    </Swiper>

  );
};