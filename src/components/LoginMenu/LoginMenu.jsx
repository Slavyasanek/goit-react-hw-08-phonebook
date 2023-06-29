import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const LoginMenu = () => {
    return (<Menu
        isLazy={true}>
        {({ isOpen }) => (
            <>
                <MenuButton
                    isActive={isOpen}
                    colorScheme="teal"
                    as={Button}
                >{isOpen ? 'Close' : 'Sign In'}</MenuButton>
                <MenuList minW={"100px"}>
                    <MenuItem
                        as={Button}
                        colorScheme="teal"
                        variant={'ghost'}
                        color="teal.500">
                        <Link to={'signup'}>Sign Up</Link></MenuItem>
                    <MenuItem
                        as={Button}
                        colorScheme="teal"
                        variant={'ghost'}
                        color="teal.500">
                        <Link to={'/login'}>Log in</Link></MenuItem>
                </MenuList>
            </>
        )}
    </Menu>)
};
