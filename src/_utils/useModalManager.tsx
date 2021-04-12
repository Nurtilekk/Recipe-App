import { useState } from "react";

export const useModalManager = (): [boolean, (status: boolean) => void] => {
  const [isOpen, setIsOpen] = useState(false);
  const setModal = (status: boolean) => setIsOpen(status);
  return [isOpen, setModal];
};
