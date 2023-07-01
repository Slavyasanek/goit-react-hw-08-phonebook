import { Alert, Wrap } from "@chakra-ui/react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/selectors"

export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

    return (<Wrap
        minW={'100%'}
        spacing={{
            base: '14px',
            md: '18px'
        }}>
        {contacts.length > 0 ? (contacts.map(contact =>
            <ContactItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id} />))
            : <Alert
                as={'li'}
                status="info"
                colorScheme="teal"
                variant={'left-accent'}>No matches found</Alert>}
    </Wrap>)
}