import { useState, type KeyboardEvent } from "react";

interface UseSelectKeyboardProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  options: Map<string, unknown>;
  value: string;
  onChange: (value: string) => void;
}

export const useSelectKeyboard = ({
  isOpen,
  setIsOpen,
  options,
  value,
  onChange,
}: UseSelectKeyboardProps) => {
  const [focusedValue, setFocusedValue] = useState<string | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      const target =
        value && options.has(value)
          ? value
          : options.keys().next().value || null;
      setFocusedValue(target);
    } else {
      setFocusedValue(null);
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    const optionKeys = Array.from(options.keys());
    const currentIndex = focusedValue ? optionKeys.indexOf(focusedValue) : -1;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex =
          currentIndex < optionKeys.length - 1 ? currentIndex + 1 : 0;
        setFocusedValue(optionKeys[nextIndex]);
        break;
      }

      case "ArrowUp": {
        e.preventDefault();
        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : optionKeys.length - 1;
        setFocusedValue(optionKeys[prevIndex]);
        break;
      }

      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedValue) {
          onChange(focusedValue);
          setIsOpen(false);
        }
        break;

      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  return {
    focusedValue,
    handleKeyDown,
  };
};
