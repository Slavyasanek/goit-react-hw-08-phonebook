import { Alert, Wrap } from "@chakra-ui/react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/selectors"

export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

    if (contacts.length === 0) {
        return (<Alert status="error" colorScheme="teal">No matches found</Alert>)
    } else {
        return (<Wrap
            w={'100%'}
            spacing={{
                base: '14px',
                md: '18px'
            }}>
            {contacts.map(contact =>
                <ContactItem
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    id={contact.id} />)}
        </Wrap>)
    }
}