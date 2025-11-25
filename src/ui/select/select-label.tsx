import { type ReactNode } from "react";
import { useSelectContext } from "./use-select-context";

/**
 * Select의 레이블을 렌더링합니다.
 * Trigger와 연결되어 클릭 시 Trigger로 포커스를 이동시킵니다.
 */
export const SelectLabel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { labelId, triggerId } = useSelectContext();
  return (
    <label
      id={labelId}
      htmlFor={triggerId}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    >
      {children}
    </label>
  );
};
