import { type ReactNode, useEffect } from "react";
import { useSelectContext } from "./use-select-context";

/**
 * 개별 옵션 항목입니다.
 * 선택 시 값을 업데이트하고 메뉴를 닫습니다.
 * 자신의 라벨을 Context에 등록하여 Trigger에서 보여질 수 있게 합니다.
 */
export const SelectItem = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const {
    onChange,
    setIsOpen,
    value: selectedValue,
    registerOption,
    unregisterOption,
    focusedValue,
    triggerId,
  } = useSelectContext();

  useEffect(() => {
    registerOption(value, children);
    return () => unregisterOption(value);
  }, [value, children, registerOption, unregisterOption]);

  const isSelected = value === selectedValue;
  const isFocused = value === focusedValue;

  return (
    <div
      id={`${triggerId}-option-${value}`}
      role="option"
      aria-selected={isSelected}
      className={`relative flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer select-none transition-colors duration-150 ${
        isSelected
          ? "bg-indigo-50 text-indigo-900 font-medium"
          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      } ${isFocused ? "bg-gray-100" : ""}`}
      onClick={() => {
        onChange(value);
        setIsOpen(false);
      }}
    >
      <span className="block truncate">{children}</span>
    </div>
  );
};
