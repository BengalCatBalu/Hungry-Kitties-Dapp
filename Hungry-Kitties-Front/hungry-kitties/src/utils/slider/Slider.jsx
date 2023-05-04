import { Navigation, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './slider.css' 
import 'swiper/css';
import 'swiper/css/navigation';

export default ({image1, image2, image3, image4, image5}) => {
  return (
    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      <SwiperSlide><img src={image1} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image2} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image3} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image4} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image5} alt=""/></SwiperSlide>
    </Swiper>

  );
};