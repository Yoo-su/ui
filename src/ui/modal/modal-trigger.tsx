import { cloneElement, isValidElement, type ReactNode } from "react";
import { useModal } from "./modal-context";

interface ModalTriggerProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

/**
 * 모달을 여는 트리거 버튼입니다.
 * asChild prop을 통해 자식 요소를 버튼으로 사용할 수 있습니다.
 */
export const ModalTrigger = ({
  children,
  asChild = false,
  className,
}: ModalTriggerProps) => {
  const { isOpen, setIsOpen, triggerId, modalId } = useModal();

  const handleClick = () => {
    setIsOpen(true);
  };

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{
      onClick?: (e: React.MouseEvent) => void;
      className?: string;
    }>;
    return cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        child.props.onClick?.(e);
        handleClick();
      },
      className: className
        ? `${child.props.className || ""} ${className}`
        : child.props.className,
    });
  }

  return (
    <button
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={modalId}
      onClick={handleClick}
      id={triggerId}
      className={className}
    >
      {children}
    </button>
  );
};
