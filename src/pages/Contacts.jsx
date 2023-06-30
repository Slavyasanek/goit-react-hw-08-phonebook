import { Center, Box } from "@chakra-ui/react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";
import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    if (!isLoggedIn && !isRefreshing) {
        return <Navigate to='/login'/>
    }
    return (<Center pt={{base: '30px', md: '40px'}} pb={'100px'} flexDirection={'column'} >
        <Box bg={'white'} p={'20px'} borderRadius={"8px"} border={"2px"} borderColor={'teal.300'} w={{base: '344px', md: '444px'}}>
        <ContactForm/>
        </Box>
        <Box mb={'20px'} mt={'20px'}>
            <Filter/>
        </Box>
        <Box w={{base: '344px', md: '444px'}} bg={'white'} p={'20px'} borderRadius={"8px"} border={"2px"} borderColor={'teal.300'}>
            <ContactList/>
        </Box>
    </Center>)
}

export default Contacts;