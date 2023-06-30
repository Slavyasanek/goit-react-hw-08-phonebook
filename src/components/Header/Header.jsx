import { Box, Flex, Heading } from "@chakra-ui/react"
import { Container } from "components/Container/Container"
import { LoginMenu } from "components/LoginMenu/LoginMenu";
import { UserMenu } from "components/UserMenu/UserMenu";
import { BsPhoneVibrate } from 'react-icons/bs'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing)

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
                    <Link to={'/'}>
                        <Flex direction={'row'} gap={'10px'} align={'center'} role="group"
                            transition={'cubic-bezier(.17,.67,.83,.67)'}>
                            <Box as={BsPhoneVibrate}
                                transition={'all 0.3s cubic-bezier(.17,.67,.83,.67)'}
                                size={40}
                                color='teal.300'
                                _groupHover={{ color: 'white' }} />

                            <Heading as='h3' color={'teal.100'}
                                fontSize={{
                                    sm: '20px',
                                    md: '24px',
                                    xl: '30px'
                                }}
                                transition={'all 0.3s cubic-bezier(.51,.15,.21,.75)'}
                                letterSpacing={'1.2px'}
                                _groupHover={{
                                    color: "white",
                                }}
                            >PhoneBook</Heading>
                        </Flex>
                    </Link>
                    {!isRefreshing && (isLoggedIn ? <UserMenu /> : <LoginMenu />)}
                </Flex>
            </Container>
        </Box>)
}