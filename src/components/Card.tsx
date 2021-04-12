import { CardProps } from "../interfaces";

export const Card: React.FC<CardProps> = ({title, status, img, description, rate}) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
