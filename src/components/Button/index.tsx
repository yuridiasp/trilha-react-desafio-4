import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, ...rest }: IButtonProps) => {
  return <ButtonContainer {...rest} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;