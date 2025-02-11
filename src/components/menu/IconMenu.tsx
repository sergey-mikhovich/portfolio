import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../slyles/Theme.ts";

type IconMenuItemsPropsType = {
    href: string,
    iconId: string,
    title: string,
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
                {props.items.map((item, index) => (
                    <ListItem key={index}>
                        <Link title={item.title} href={item.href}>
                            <Icon iconId={item.iconId} width={item.width} viewBox={item.viewBox} />
                        </Link>
                    </ListItem>
                ))}
            </ul>
        </StyledIconMenu>
    );
};

const StyledIconMenu = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
        gap: 40px;
    }
`;

const ListItem = styled.li`
    
`;

const Link = styled.a.attrs((props) => ({
    title: props.title,
}))`
    color: ${theme.colors.secondaryFont};
    background-color: ${theme.colors.secondaryBg};
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;
    
    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryFont};
    }
`;