import styled from "styled-components";

export const TitleH2 = styled.h2`
    color: ${props => `#${props.colorText}`};
    font-size: ${props => props.bigFont ? `2rem` : '1rem'};
`
