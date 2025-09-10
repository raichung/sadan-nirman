"use client";

import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload next images in slideshow using requestIdleCallback
    const preloadImages = () => {
      const images = [
        "/pic_02.jpg",
        "/pic_03.jpg",
        "/pic_04.jpg",
        "/pic_05.jpg",
      ];

      images.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Use requestIdleCallback for better performance
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setTimeout(preloadImages, 3000); // Delay to 3 seconds
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadImages, 3000);
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;
