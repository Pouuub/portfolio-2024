import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

interface ModalProps {
  label: string;
  dialog_title: string;
  btn_class?: string;
  children: React.ReactNode;
}

const Modal = ({ label, dialog_title, btn_class, children }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className={btn_class}>{label}</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialog_title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
