import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import palette from "../../lib/styles/palette";
import { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;

  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
    transition: 0.5s;
  }
  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = ({ to, ...rest }) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    if (to) {
      navigate(to);
    }
  };
  return to ? (
    <StyledButton onClick={onClick} {...rest} />
  ) : (
    <StyledButton {...rest} />
  );
};
export default Button;
