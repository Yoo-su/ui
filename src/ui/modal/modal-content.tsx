import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModal } from "./modal-context";

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

/**
 * 모달의 컨텐츠를 렌더링하는 컴포넌트입니다.
 * Portal을 사용하여 document.body에 렌더링되며, 오버레이 클릭 및 ESC 키로 닫기 기능을 제공합니다.
 */
export const ModalContent = ({
  children,
  className = "",
}: ModalContentProps) => {
  const { isOpen, setIsOpen } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-in fade-in zoom-in-95 duration-200 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
