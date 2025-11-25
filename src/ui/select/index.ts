import { Select as SelectRoot } from "./select";
import { SelectTrigger } from "./select-trigger";
import { SelectContent } from "./select-content";
import { SelectItem } from "./select-item";
import { SelectLabel } from "./select-label";

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
});

export { SelectTrigger, SelectContent, SelectItem, SelectLabel };
