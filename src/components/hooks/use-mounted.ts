import { useEffect, useState } from "react";

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback for better performance
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setMounted(true);
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => setMounted(true), 0);
    }
  }, []);

  return mounted;
};

export default useMounted;
