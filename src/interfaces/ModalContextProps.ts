export default interface ModalContextProps {
  isOpen: boolean;
  open(): void;
  close(): void;
}
