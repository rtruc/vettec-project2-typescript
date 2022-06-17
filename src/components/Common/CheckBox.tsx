import styled from "styled-components";
import { theme } from "../../css/theme";

const CheckBoxDiv = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;

    /* For iOS < 15: Not removed via appearance  */
    background-color: white;

    margin: 0;

    cursor: pointer;

    font: inherit;

    width: 1.15em;
    height: 1.15em;
    border: 0.075em solid ${theme.task_BorderShadowColor};
    border-radius: 0.3em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    transition: border 250ms;
    &:hover {
        border: 0.15em solid ${theme.task_BorderShadowColor_HoverFocus};

    }

    &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: center;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: ${theme.active_Color};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:disabled {
        --form-control-color: var(--form-control-disabled);

        color: var(--form-control-disabled);
        cursor: not-allowed;
    }
    
    accent-color: ${theme.active_Color};
`

interface CheckBoxProps {
    isComplete?: boolean;
    clickEvent: () => {};
}

export const CheckBox: React.FC<CheckBoxProps> = ({isComplete, clickEvent}) => {

    return (
        <>
            {isComplete ? <CheckBoxDiv defaultChecked onClick={clickEvent} /> :
                          <CheckBoxDiv onClick={clickEvent}/>}
        </>
    )
}