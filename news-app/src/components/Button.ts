import styled from "styled-components";
export const ButtonWithTheme = styled.button`
  color: ${(props) => props.theme.color.secundary.main};
  background-color: ${(props) => props.theme.color.secundary.contrastText};
  border: ${(props) => props.theme.border.style};
  border-radius: ${(props) => props.theme.border.radius};
  font-size: ${(props) => props.theme.font.big};
`;