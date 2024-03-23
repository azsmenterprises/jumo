import React, {useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../assets/css/swiper-style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Img1 from '../assets/images/car-s-1.jpg';
import Img2 from '../assets/images/car-s-2.jpg';
import Img3 from '../assets/images/car-s-3.jpg';
import Img4 from '../assets/images/car-s-4.jpg';

function ProductDetailSliderWithThumb() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="SwiperThumb2"
      >
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="SwiperThumb"
      >
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default ProductDetailSliderWithThumb