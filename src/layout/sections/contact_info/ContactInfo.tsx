import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {ContactCard} from "../../../components/card/ContactCard.tsx";
import {theme} from "../../../slyles/Theme.ts";

export const ContactInfo = () => {
    return (
        <StyledContactInfo>
            <SectionTitle>Contact Info</SectionTitle>
            <Contacts>
                <ContactCard
                    iconId={'location'}
                    records={[
                        { name: "Country", value: "Bangladesh" },
                        { name: "City", value: "Dhaka" },
                        { name: "Street", value: "35 Vhatara Badda" },
                    ]}
                />
                <ContactCard
                    iconId={'mail'}
                    records={[
                        { name: "Email", value: "example@example.com" },
                        { name: "Skype", value: "@username" },
                        { name: "Telegram", value: "@telegram" },
                    ]}
                />
                <ContactCard
                    iconId={'mobile'}
                    records={[
                        { name: "Support Services", value: "129" },
                        { name: "Office", value: "+375298569874" },
                        { name: "Personal", value: "+375333304578" },
                    ]}
                />
            </Contacts>
        </StyledContactInfo>
    );
};

const StyledContactInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 370px;
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
`;

const Contacts = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 680px;
    height: 100%;
`;