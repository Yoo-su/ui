import { createContext, useContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  modalId: string;
  triggerId: string;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "Modal 컴포넌트는 <Modal> 컴포넌트 내부에서만 사용되어야 합니다."
    );
  }
  return context;
};
