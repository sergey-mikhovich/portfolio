import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type IconMenuItemsPropsType = {
    href: string,
    iconId: string,
    width?: string,
    viewBox?: string
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
                            <Icon iconId={item.iconId} width={item.width} viewBox={item.viewBox} />
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
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
`;