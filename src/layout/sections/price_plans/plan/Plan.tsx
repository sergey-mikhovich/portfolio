import {PackageItem, PackageItemPropsType} from "../package_item/PackageItem.tsx";
import {S} from "./Plan_Styles.ts";

type PlanPropsType = {
    mostPopular: boolean
    title: string
    price: string
    description: string
    packageItems : Array<PackageItemPropsType>
}

export const Plan = (props: PlanPropsType) => {
    return (
        <S.Plan>
            <S.EyeCatchingTitle mostPopular={props.mostPopular}>{props.mostPopular ? 'Most Popular' : ''}</S.EyeCatchingTitle>
            <S.MainContent>
                <S.Title>{props.title}</S.Title>
                <S.ComposePrice>
                    <S.Price>{`$${props.price}`}</S.Price><S.Hour>/Hour</S.Hour>
                </S.ComposePrice>
                <S.Description>{props.description}</S.Description>
                <S.PackageItems>
                    {props.packageItems.map((item, index) => (
                        <PackageItem
                            key={index}
                            included={item.included}
                            text={item.text}
                        />
                    ))}
                </S.PackageItems>
                <S.OrderButton>Order Now</S.OrderButton>
            </S.MainContent>
        </S.Plan>
    );
};



