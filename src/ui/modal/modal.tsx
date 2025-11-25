import { useId, useState, type ReactNode } from "react";
import { ModalContext } from "./modal-context";

interface ModalProps {
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * 모달의 Root 컴포넌트입니다.
 * Context를 제공하고, Controlled/Uncontrolled 상태를 관리합니다.
 */
export const Modal = ({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: ModalProps) => {
  const [isUncontrolledOpen, setIsUncontrolledOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : isUncontrolledOpen;

  const baseId = useId();
  const modalId = `${baseId}-modal`;
  const triggerId = `${baseId}-trigger`;

  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setIsUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, modalId, triggerId }}>
      {children}
    </ModalContext.Provider>
  );
};
