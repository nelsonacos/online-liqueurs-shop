import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  };
};
