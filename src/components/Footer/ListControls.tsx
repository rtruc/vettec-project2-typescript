import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sortTitlesAscending, sortTitlesDescending, sortDatesAscending, sortDatesDescending } from "../../redux/actions/actions";
import { FooterButton } from "./FooterButton"
import { Icon } from "./Icon";
import { alphaDown, alphaUp, timeDown, timeUp } from "../../img/icons";


const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
    gap: 5px;
    font-weight: bolder;
    height: 100%;
`

export const ListControls = () => {

    const dispatch = useDispatch();

    return (
        <ControlsDiv>
            
            <FooterButton onClick={() => dispatch(sortTitlesAscending())}>
                <Icon src={alphaUp} />
            </FooterButton>

            <FooterButton onClick={() => dispatch(sortTitlesDescending())}>
                <Icon src={alphaDown} />
            </FooterButton>

            <FooterButton onClick={() => dispatch(sortDatesAscending())}>
                <Icon src={timeUp} />
            </FooterButton>

            <FooterButton onClick={() => dispatch(sortDatesDescending())}>
                <Icon src={timeDown} />
            </FooterButton>

        </ControlsDiv>
    );


}