import React from 'react';
import styles from './Hero.module.css';
import { Image } from '@mantine/core';
import { ArrowRight } from "lucide-react";
import { Rajdhani } from 'next/font/google';
import RollingGallery from './RollingGallery'

const rajdhani = Rajdhani({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.90,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Image
          width={300}
          height={200}
          radius="md"
          src="https://res.cloudinary.com/di0btw2pi/image/upload/v1745326600/Logo_TopLevel_PNG_a_ifjw1y.png"
          alt="TopLevel Logo"
        />
      </div>

      <h1 className={`${rajdhani.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`}>
        <span className="block">JUEGA, CONECTA Y EVOLUCIONA</span>
      </h1>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <button
        onClick={handleScroll}
        className="w-full mt-15 sm:w-auto bg-gradient-to-r from-[#020024] to-[#0c2a85] hover:bg-yellow-600 text-white font-semibold px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <span>Comprar ahora</span>
        <ArrowRight size={20} />
      </button>

     
    </section>
  );
};

export default Hero;
