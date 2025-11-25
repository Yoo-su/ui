import { type ReactNode } from "react";
import { useSelectContext } from "./use-select-context";

interface SelectContentProps {
  children: ReactNode;
}

/**
 * 옵션 목록을 보여주는 컨테이너입니다.
 * 열림 상태일 때만 렌더링(또는 표시)되며, 애니메이션 효과가 적용됩니다.
 */
export const SelectContent = ({ children }: SelectContentProps) => {
  const { isOpen, labelId, triggerId } = useSelectContext();

  return (
    <div
      id={isOpen ? `${triggerId}-list` : undefined}
      role="listbox"
      aria-labelledby={labelId}
      className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 border border-gray-100 focus:outline-none z-10 ${
        isOpen ? "animate-in fade-in zoom-in-95 duration-100" : "hidden"
      }`}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
};
