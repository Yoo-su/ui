import { createContext, type ReactNode } from "react";

interface SelectContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  triggerId: string;
  labelId: string;
  options: Map<string, ReactNode>;
  registerOption: (value: string, label: ReactNode) => void;
  unregisterOption: (value: string) => void;
  focusedValue: string | null;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  disabled: boolean;
}

export const selectContext = createContext<SelectContextType | null>(null);
