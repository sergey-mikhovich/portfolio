import iconsSprite from '../../assets/images/icons-sprite.svg'

export type IconPropsType = {
    iconId: string
    width?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <>
            <svg width={`${props.width || ''}`}
                 height={`${props.width || ''}`}
                 viewBox={`${props.viewBox || ""}`}
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
            </svg>
        </>
    );
};