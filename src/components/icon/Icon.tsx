import iconsSprite from '../../assets/images/icons-sprite.svg'

export type IconPropsType = {
    iconId: string
    width?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <div>
            <svg width={`${props.width || "74"}`}
                 height={`${props.width || "74"}`}
                 viewBox={`${props.viewBox || "0 0 74 74"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
            </svg>
        </div>
    );
};