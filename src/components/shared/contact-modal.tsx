"use client";

import { type ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Button, type ButtonProps } from "@/components/ui/button";
import ContactForm from "@/components/forms/contact";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "@/components/shared/modal";
import useContactModal from "@/components/store/use-contact-modal";

type TriggerModalProps = {
  children: ReactNode;
} & ButtonProps;

export const TriggerModalButton = ({
  children,
  ...props
}: TriggerModalProps) => {
  const contactModal = useContactModal();

  return (
    <Button {...props} onClick={() => contactModal.setIsOpen(true)}>
      {children}
    </Button>
  );
};

const ContactModal = () => {
  const contactModal = useContactModal();
  const t = useTranslations();

  return (
    <Modal
      open={contactModal.isOpen}
      onOpenChange={(val) => contactModal.setIsOpen(val)}
    >
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t("contact-us")}</ModalTitle>
          <ModalDescription>
            The best and the easiest way to reach us.
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          <ContactForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
