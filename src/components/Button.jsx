import styled from "styled-components";

export const Button = ({ color, children, bgColor, size, width}) => {
  return (
    <SButton width={width} size={size} bgColor={bgColor} color={color}>
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  max-width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.size};
  padding: 20px 40px;
  border-radius: 30px;
  transition: background-color .4s ease;
  border-color:  ${(props) => props.color};
  &:hover {
    background-color: #0C481B;
  }
  &:focus {
    background-color: #0C481B;
  }
`;
