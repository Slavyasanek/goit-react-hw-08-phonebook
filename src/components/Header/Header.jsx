import { Box, Flex, Heading } from "@chakra-ui/react"
import { Container } from "components/Container/Container"
import { LoginMenu } from "components/LoginMenu/LoginMenu";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AiOutlinePhone } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Box
            bg={'teal.900'}
            pt={'20px'}
            pb={'20px'}
            minW={'480px'}
            as={'header'}>
            <Container>
                <Flex
                    direction={'row'}
                    justifyContent={'space-between'}>
                    <Flex direction={'row'} gap={'10px'} align={'center'}>
                        <AiOutlinePhone size={40} color='teal' />
                        <Heading as='h3' color={'teal.100'}
                            fontSize={{
                                sm: '20px',
                                md: '24px',
                                xl: '30px'
                            }}
                            letterSpacing={'1.2px'}>PhoneBook</Heading>
                    </Flex>
                    {isLoggedIn ? <UserMenu /> : <LoginMenu />}
                </Flex>
            </Container>
        </Box>)}