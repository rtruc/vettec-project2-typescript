import styled from "styled-components";
import { theme } from "../../css/theme";


export const NavBarButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    margin-left: 15px;

    cursor: pointer;

    border: none;

    font-size:30px;

    text-decoration: none;
    background-color: transparent;
    color: ${theme.navbar_Text};

    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${theme.hover_Color};
    }
`;
