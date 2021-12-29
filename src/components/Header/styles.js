import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: ${props => props.changeBackground ? 'grey' : 'aliceblue'};
  text-transform: ${props => props.changeBackground && 'uppercase'};
  font-weight: bold;
`