import { Modal as ModalRoot } from "./modal";
import { ModalTrigger } from "./modal-trigger";
import { ModalContent } from "./modal-content";
import { ModalClose } from "./modal-close";

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Close: ModalClose,
});

export { ModalContext, useModal } from "./modal-context";
