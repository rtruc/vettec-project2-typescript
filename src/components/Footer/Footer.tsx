import styled from "styled-components";
import { githubIcon, linkedinIcon } from "../../img/icons";
import { theme } from "../../css/theme";
import { ListControls } from "./ListControls";
import { SocialMediaIcon } from "./SocialMediaIcon";


const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 50px;

    background-color: ${theme.navBar_BackgroundColor};

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;`


export const Footer = () => {

    const socialInfo = [
        {
            link: "https://github.com/rtruc/",
            iconURL: githubIcon,
            altTxt: "Github Icon"
        },
        {
            link: "https://www.linkedin.com/in/richard-truchanowicz/",
            iconURL: linkedinIcon,
            altTxt: "LinkedIn Icon"
        }
    ];


    return (
        <FooterDiv>
            <SocialMediaIcon iconInfo={socialInfo[0]} />
            <ListControls />
            <SocialMediaIcon iconInfo={socialInfo[1]} />
        </FooterDiv>
    )
}