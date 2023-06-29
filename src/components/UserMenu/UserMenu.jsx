import { Badge, Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { UserLogOut } from "redux/auth/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(UserLogOut());
    }
    return (<Flex align={'center'} direction={'row'} gap={'5px'}>
        <Badge
            colorScheme="teal"
            variant={'solid'}
            textTransform={'capitalize'}
            fontSize={{ sm: '16px', md: '20px', xl: '22px' }}
            p={'5px 10px'}>
            Hi, Name</Badge>
        <Badge
            colorScheme="teal"
            variant={'outline'}
            fontSize={{ sm: '16px', md: '20px', xl: '22px' }}
            p={'5px 10px'}>email</Badge>
        <Button onClick={logOut}
            colorScheme="teal"
            variant={'outline'}
            fontSize={{ sm: '16px', md: '20px', xl: '22px' }}
            h={'100%'}>Log out</Button>
    </Flex>)
};
