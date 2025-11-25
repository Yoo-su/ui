import {
  type ReactNode,
  useState,
  useId,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { selectContext } from "./context";
import { useSelectKeyboard } from "./use-keyboard";

interface SelectProps {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

/**
 * Select 컴포넌트의 Root입니다.
 * 상태(열림/닫힘, 선택된 값)를 관리하고 Context를 제공합니다.
 * click-outside 및 keyboard navigation 로직을 포함합니다.
 */
export const Select = ({
  children,
  value,
  onChange,
  disabled = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Map<string, ReactNode>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const labelId = `${baseId}-label`;

  const registerOption = useCallback((value: string, label: ReactNode) => {
    setOptions((prev) => {
      const newOptions = new Map(prev);
      newOptions.set(value, label);
      return newOptions;
    });
  }, []);

  const unregisterOption = useCallback((value: string) => {
    setOptions((prev) => {
      const newOptions = new Map(prev);
      newOptions.delete(value);
      return newOptions;
    });
  }, []);

  const { focusedValue, handleKeyDown } = useSelectKeyboard({
    isOpen,
    setIsOpen,
    options,
    value,
    onChange,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <selectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        value,
        onChange,
        triggerId,
        labelId,
        options,
        registerOption,
        unregisterOption,
        focusedValue,
        handleKeyDown,
        disabled,
      }}
    >
      <div
        ref={containerRef}
        className="relative inline-block text-left w-full"
      >
        {children}
      </div>
    </selectContext.Provider>
  );
};
