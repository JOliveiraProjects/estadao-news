import styled from "styled-components";
export const TitleTheme = styled.h1`
  color: ${(props) => props.theme.color.primary.main};
  font-size: ${(props) => props.theme.font.bigger};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:
${props => props.theme.color.primary.contrastText}; 
`;