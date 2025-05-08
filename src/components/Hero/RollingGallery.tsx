import React, { useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";
import Image from "next/image";

const IMGS: string[] = [
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745328345/Frrelogo_h18ymp.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421431/ROBLOX_BLANCO_ucrepa.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421425/brawl-stars-logo_w_yaqevs.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421424/mlbb-black-white-seeklogo_xzezrt.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421424/clash-royale-logo-white_n85rrb.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421425/E_FOOTBALL_LOGO_wzczqp.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421425/COD_MOBILE_BLANCO_at9qrx.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421424/BLOODSTRIKE_BLANCO_cx9xqn.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745421424/FC_MORBILE_nfy5qu.png",
  "https://res.cloudinary.com/di0btw2pi/image/upload/v1745423304/Tribe_Website_TeamLogos_COC_White-e537fdd3_lygk7c.webp",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {

  const galleryImages = images.length > 0 ? images : IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640);
  
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = useCallback((startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, controls, rotation, startInfiniteSpin]); 
  

  const handleUpdate = (latest: { rotateY?: number }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };
  
  const handleDrag = (_: unknown, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };
  
  const handleDragEnd = (_: unknown, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };
  

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[140px] w-full mb-5 overflow-hidden">
      
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[230px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
 <Image
  src={url}
  alt="gallery"
  width={faceWidth} 
  height={150}
  className="pointer-events-none border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105"
  unoptimized 
/>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
