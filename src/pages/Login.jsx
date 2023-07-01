import { Flex, Center, FormControl, InputRightElement, Button, Heading, FormLabel, InputGroup, useToast} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsError, selectIsLoggedIn } from "redux/auth/selectors";
import { StyledInput } from "components/StyledInput/StyledInput";
import { UserLogIn } from "redux/auth/operations";
import { nanoid } from "nanoid";
import { setIsError } from "redux/auth/slice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const isError = useSelector(selectIsError); 
    const toast = useToast();
    const dispatch = useDispatch();
    const handleShow = () => setShow(!show);

    useEffect(() => {
        if (isError) {
            toast({
                position: 'top',
                title: 'Incorrect password or email',
                variant: 'left-accent',
                status: 'error',
                duration: '3000'
            });
            dispatch(setIsError());
        }
    }, [isError, dispatch, toast])

    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to={'/contacts'} />
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = { email, password };
        console.log(user);
        dispatch(UserLogIn(user));
        reset();
    }

    const handleChange = ({ target }) => {
        if (target.name === 'email') {
            setEmail(target.value);
        } else if (target.name === 'password') {
            setPassword(target.value)
        }
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    }

    const emailId = nanoid();
    const passwdId = nanoid();

    return (<Center w={'100%'} h={'100%'} pt={'100px'} pb={'70px'}>
        <FormControl as='form' w={'inherit'} autoComplete="on" onSubmit={handleSubmit}>
            <Flex
                direction={'column'}
                gap={'10px'}
                justifyContent={'center'}
                align={'center'}
                m={0}>

                <Heading as={'h1'}>Log in</Heading>

                <FormLabel htmlFor={emailId}>Email</FormLabel>
                <StyledInput id={emailId} type={"email"} placeholder={"Enter your email"} name={"email"} value={email} onChange={handleChange} />

                <FormLabel htmlFor={passwdId}>Password</FormLabel>
                <InputGroup maxW={{ base: '350px', md: '400px', xl: '550px' }}>
                    <StyledInput
                        type={show ? 'text' : 'password'}
                        placeholder={"Enter your password"}
                        name={'password'} value={password}
                        onChange={handleChange}
                        minLength={7} 
                        id={passwdId}/>

                    {password !== '' && <InputRightElement width='4.5rem' top={'50%'} transform={'translateY(-50%)'}>
                        <Button h='1.75rem' size='sm' onClick={handleShow} colorScheme="teal" variant={'outline'}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>}
                </InputGroup>
                <Button
                    size={'lg'}
                    colorScheme="teal"
                    variant={"solid"}
                    mt={'20px'}
                    w={'180px'}
                    type="submit">Log in</Button>
            </Flex>
        </FormControl>
    </Center>)
}

export default Login;
