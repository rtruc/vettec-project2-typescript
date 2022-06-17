import styled from "styled-components";
import { theme } from "../../css/theme";


export const Icon = styled.img`
    max-height: 40px;
    display:flex;
    justify-content: center;

    & a:hover {
        background-color: ${theme.hover_Color};
    } 
`