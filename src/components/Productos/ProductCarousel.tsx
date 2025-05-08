import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ArrowRight } from "lucide-react";
import { Card, Image } from '@mantine/core';
import { useThemeObserver } from "../hooks/useThemeObserver";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import axios from "axios";

type Product = {
  title: string;
  imageUrl: string;
  badgeText: string;
  url: string;
  top?: boolean;
  subProducts?: {
    name: string;
    price: string;
  }[];
};


interface ProductCarouselProps {
  title?: string;
  description?: string;
  products: Product[];
}

function ProductCarousel({ title = "Productos Destacados", description, products }: ProductCarouselProps) {

  const theme = useThemeObserver();
  const cardBackgroundColor = theme === "dark" ? "#213170" : "#ffffff";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const priceColor = theme === "dark" ? "text-green-400" : "text-[#0c2a85]";
  const bgGradient = theme === "dark"
    ? "from-[#ffffff] to-[#ffffff]"
    : "from-[#020024] to-[#0c2a85]"

  const router = useRouter();
  const textColorb = theme === "dark" ? "text-black" : "text-white";



  return (
    <div className="relative bg-card/80 p-10 ">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-3 tracking-tight ${theme === "dark" ? "text-[#D5E7FC]" : "text-[#0c2a85]"}`}>
          {title}
        </h1>
        {description && (
          <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-blue-200" : "text-[#427dd0]"}`}>
            {description}
          </p>
        )}
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          1000: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide className="mb-10 p-2" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                onClick={() => router.push(`/recargas/${product.title.toLowerCase().replace(/\s+/g, "-")}`)}
                radius="lg"
                mt={20}
                shadow="md"
                style={{ backgroundColor: cardBackgroundColor, cursor: "pointer" }}
                className="flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <Card.Section>
                  <div className="relative w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.imageUrl}
                      alt={`Imagen de ${product.title}`}
                      className="transition-transform duration-100 ease-in-out transform"
                    />
                  </div>
                </Card.Section>

                <h2 className={`text-xl font-bold ${textColor} text-center mt-2`}>
                  {product.title}
                </h2>
            


                <button
                  onClick={() => router.push(`/recargas/${product.title.toLowerCase().replace(/\s+/g, "-")}`)}
                  className={`w-full mt-2 bg-gradient-to-r ${bgGradient} font-semibold px-8 py-6 text-lg rounded-full transition-all transform flex items-center justify-center gap-2`}
                >
                  <span className={textColorb}>Recargar ahora</span>
                  <ArrowRight size={20} className={textColorb} />
                </button>

              </Card>
            </motion.div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}


export default ProductCarousel;