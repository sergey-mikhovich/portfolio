import {SectionTitle} from "../SectionTitle.tsx";
import {ContactCard} from "../../../components/card/contact_card/ContactCard.tsx";
import {S} from "./ContactInfo_Styles.ts";

const contactItems = [
    {
        iconId: "location",
        records: [
            { name: "Country", value: "Bangladesh" },
            { name: "City", value: "Dhaka" },
            { name: "Street", value: "35 Vhatara Badda" },
        ]
    },
    {
        iconId: "mail",
        records: [
            { name: "Email", value: "example@example.com" },
            { name: "Skype", value: "@username" },
            { name: "Telegram", value: "@telegram" },
        ]
    },
    {
        iconId: "mobile",
        records: [
            { name: "Support Services", value: "129" },
            { name: "Office", value: "+375298569874" },
            { name: "Personal", value: "+375333304578" },
        ]
    }
]

export const ContactInfo = () => {
    return (
        <S.ContactInfo id={"contacts"}>
            <SectionTitle>Contact Info</SectionTitle>
            <S.Contacts>
                {contactItems.map((item, index) => (
                    <ContactCard
                        key={index}
                        iconId={item.iconId}
                        records={item.records}
                    />
                ))}
            </S.Contacts>
        </S.ContactInfo>
    );
};