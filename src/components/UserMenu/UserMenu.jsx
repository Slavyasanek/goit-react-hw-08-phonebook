import { Badge, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserLogOut } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOut = () => {
        dispatch(UserLogOut());
    }
    return (<Flex align={'center'} direction={'row'} gap={'5px'}>
        <Link to={'/contacts'}>
        <Badge
            colorScheme="teal"
            variant={'solid'}
            textTransform={'capitalize'}
            fontSize={{ sm: '16px', md: '20px', xl: '22px' }}
            p={'5px 10px'}>
            Hi, {user.name}</Badge>
        </Link>
        <Badge
            colorScheme="teal"
            variant={'outline'}
            fontSize={{ sm: '14px', md: '18px', xl: '20px' }}
            p={'5px 10px'}
            hideBelow={"768px"}
            h={'100%'}>{user.email}</Badge>
        <Button onClick={logOut}
            colorScheme="teal"
            variant={'outline'}
            fontSize={{ sm: '16px', md: '20px', xl: '22px' }}
            h={'100%'}>Log out</Button>
    </Flex>)
};
