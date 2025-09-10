"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Array of all hero images
  const images = [
    "/pic_01.jpg",
    "/pic_02.jpg",
    "/pic_03.jpg",
    "/pic_04.jpg",
    "/pic_05.jpg",
  ];

  const changeImage = useCallback(() => {
    setIsTransitioning(true);

    // Use requestIdleCallback for better performance
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        setIsTransitioning(false);
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        setIsTransitioning(false);
      }, 0);
    }
  }, [images.length]);

  useEffect(() => {
    // Start slideshow after initial render
    const startSlideshow = () => {
      intervalRef.current = setInterval(changeImage, 6000); // Increased to 6 seconds
    };

    // Delay start to not block initial render
    const timeoutId = setTimeout(startSlideshow, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [changeImage]);

  return (
    <div className="absolute inset-0 z-[-2]">
      <Image
        src={images[currentImageIndex]}
        alt="Hero Background"
        fill
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        priority={currentImageIndex === 0}
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
};

export default HeroSlideshow;
