import { ButtonBaseProps } from "@material-ui/core";
import styled from "styled-components";
import type {} from "styled-components/cssprop";

interface ButtonProps {
  color: string;
  bgColor: string;
  size: string;
  width: string;
}

export const Button: React.FC<ButtonProps & ButtonBaseProps> = ({
  color,
  children,
  bgColor,
  size,
  width,
  onClick,
}) => {
  return (
    <SButton
      onClick={onClick}
      width={width}
      size={size}
      bgColor={bgColor}
      color={color}
    >
      {children}
    </SButton>
  );
};

const SButton = styled.button<ButtonProps & ButtonBaseProps>`
  max-width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.size};
  padding: 20px 40px;
  border-radius: 30px;
  transition: background-color 0.4s ease;
  border-color: ${(props) => props.color};
  &:hover {
    background-color: #0c481b;
  }
  &:focus {
    background-color: #0c481b;
  }
`;
