import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Image } from '@mantine/core';

const images = [
  'https://res.cloudinary.com/di0btw2pi/image/upload/v1745874657/TOPLEVEL_BANNER_MLBB_1_ryvs0h.png',
  'https://res.cloudinary.com/di0btw2pi/image/upload/v1745874657/TOPLEVEL_BANNER_FREE_1_r7pbli.png',
  'https://res.cloudinary.com/di0btw2pi/image/upload/v1745874659/TOPLEVEL_BANNER_BLOOD_1_wdjqeb.png',
];

function CarrouselBanner() {
  return (
    <div className="relative" style={{ width: '100%', padding: '20px' }}>
      <div className="relative mb-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            1000: { slidesPerView: 1, spaceBetween: 50 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
           
                <div >
                      <Image
                        radius="md"
                        src={src}
                        alt={`Slide ${index + 1}`}
                        mb={25}
                      />
                    </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

   
    </div>
  );
}

export default CarrouselBanner;
