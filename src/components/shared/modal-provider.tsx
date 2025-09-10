"use client";

import { useEffect, useState } from "react";

import ContactModal from "./contact-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback to defer mounting
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setMounted(true);
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => setMounted(true), 0);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return <ContactModal />;
};

export default ModalProvider;
