import { create } from "zustand";

interface UseContactModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setIsOpen: (val: boolean) => void;
}

const useContactModal = create<UseContactModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsOpen: (val) => set({ isOpen: val }),
}));

export default useContactModal;
