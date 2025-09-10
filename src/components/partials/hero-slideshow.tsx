"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array of all hero images
  const images = [
    "/pic_01.jpg",
    "/pic_02.jpg",
    "/pic_03.jpg",
    "/pic_04.jpg",
    "/pic_05.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Start transition
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-[-2]">
      <Image
        src={images[currentImageIndex]}
        alt="Hero Background"
        fill
        className={`object-cover transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default HeroSlideshow;
