import { useModal } from "./modal-context";

interface ModalCloseProps {
  className?: string;
}

/**
 * 모달을 닫는 버튼 컴포넌트입니다.
 * 우측 상단에 고정된 닫기 버튼을 렌더링합니다.
 */
export const ModalClose = ({ className = "" }: ModalCloseProps) => {
  const { setIsOpen } = useModal();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none ${className}`}
      aria-label="Close"
    >
      <span className="text-xs text-gray-400 cursor-pointer">X</span>
    </button>
  );
};
