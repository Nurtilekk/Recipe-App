export interface CardProps {
  img: string;
  title: string;
  description: string;
  rate: number;
  status: string;
}

export interface ButtonPops {
  color: string;
  bgColor: string;
  size: string;
  width: string;
}

export interface ModalProps {
  children: any;
  title: string;
  isOpen: boolean;
  setModal: (status: boolean) => void;
}
