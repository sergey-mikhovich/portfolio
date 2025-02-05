import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type IconMenuItemsPropsType = {
    href: string,
    iconId: string,
}

type IconMenuPropsType = {
    items: Array<IconMenuItemsPropsType>
}

export const IconMenu = (props: IconMenuPropsType) => {
    return (
        <StyledIconMenu>
            <ul>
                {props.items.map(item => (
                    <li>
                        <a href={item.href}>
                            <Icon iconId={item.iconId}/>
                        </a>
                    </li>
                ))}
            </ul>
        </StyledIconMenu>
    );
};

const StyledIconMenu = styled.div`
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
    }
`;