import { useContext } from "react";
import { selectContext } from "./context";

export const useSelectContext = () => {
  const context = useContext(selectContext);

  if (!context) {
    throw new Error(
      "Select 컴포넌트는 <Select> 컴포넌트 내부에서만 사용되어야 합니다."
    );
  }

  return context;
};
