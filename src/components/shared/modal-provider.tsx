"use client";

import useMounted from "../hooks/use-mounted";
import ContactModal from "./contact-modal";

const ModalProvider = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return <ContactModal />;
};

export default ModalProvider;
