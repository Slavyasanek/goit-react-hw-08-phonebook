import { Center, Box, Alert, AlertIcon, Flex } from "@chakra-ui/react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";

const Contacts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    if (!isLoggedIn && !isRefreshing) {
        return <Navigate to='/login' />
    }
    return (<Center
        pt={{ base: '30px', md: '40px', xl: '70px' }}
        pb={'100px'}
        flexDirection={{ base: 'column', xl: 'row' }}
        gap={{ xl: '20px' }}
        alignItems={{ base: 'center', xl: 'start'}}>
        <Box
            bg={'white'}
            flexShrink={0} 
            p={'20px'}
            borderRadius={"8px"}
            border={"2px"}
            borderColor={'teal.300'}
            w={{ base: '344px', md: '444px' }}>
            <ContactForm />
        </Box>
        <Flex direction={'column'} flexGrow={1} w={'100%'}>
            <Box mb={'20px'} mt={{ base: '20px', xl: 0}} alignSelf={{ base: 'center', xl: 'start'}}>
                <Filter />
            </Box>
            <Box bg={'white'} minW={'100%'} p={'20px'} borderRadius={"8px"} border={"2px"} borderColor={'teal.300'}>
                {contacts.length > 0 ?
                    <ContactList />
                    : <Alert
                        status="info"
                        colorScheme="teal"
                        variant={'left-accent'}>
                        <AlertIcon /> Add contacts to proceed</Alert>}
            </Box>
        </Flex>
    </Center>)
}

export default Contacts;