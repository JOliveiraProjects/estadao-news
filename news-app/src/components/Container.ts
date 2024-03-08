import styled from "styled-components";

export const ContainerTheme = styled.div`
  padding: 15px;
  background-color: ${(props) => props.theme.color.background};
  border-radius: ${props=>props.theme.border.radius};
`;

export const Container = styled.div`
  height: 100vh;
`;