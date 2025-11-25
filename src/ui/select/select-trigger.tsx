import { useRef } from "react";
import { useSelectContext } from "./use-select-context";

/**
 * 드롭다운을 열고 닫는 트리거 버튼입니다.
 * 현재 선택된 옵션의 라벨을 표시하며, 키보드 조작 이벤트를 처리합니다.
 */
export const SelectTrigger = ({ className = "" }: { className?: string }) => {
  const {
    isOpen,
    setIsOpen,
    value,
    triggerId,
    labelId,
    options,
    handleKeyDown,
    focusedValue,
    disabled,
  } = useSelectContext();

  const selectedLabel = options.get(value);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={triggerRef}
      type="button"
      id={triggerId}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-labelledby={labelId}
      aria-controls={isOpen ? `${triggerId}-list` : undefined}
      aria-activedescendant={
        isOpen && focusedValue
          ? `${triggerId}-option-${focusedValue}`
          : undefined
      }
      className={`inline-flex justify-between items-center w-full rounded-md shadow-sm px-4 py-2.5 bg-white text-sm font-medium text-gray-700 transition-all duration-200 focus:outline-none ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-100 border border-gray-200"
          : isOpen
          ? "ring-2 ring-offset-2 ring-indigo-500 border-transparent"
          : "border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-visible:border-indigo-500"
      } ${className}`}
      onClick={() => {
        if (disabled) return;
        setIsOpen(!isOpen);
        triggerRef.current?.focus();
      }}
      onKeyDown={handleKeyDown}
      disabled={disabled}
    >
      <span className="truncate">
        {selectedLabel || <span className="text-gray-400">선택해주세요</span>}
      </span>
    </button>
  );
};
