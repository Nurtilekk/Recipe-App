import styled from "styled-components";
import { ModalProps } from "../interfaces";

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  setModal,
}) => {
  const SModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: ${isOpen ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  `;

  return (
    <SModal>
      <h1>{title}</h1>
      <button onClick={() => setModal(false)}>Close modal</button>
      {children}
    </SModal>
  );
};
