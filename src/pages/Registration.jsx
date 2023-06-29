import { Flex, Center, FormControl, InputRightElement, Button, Heading, FormLabel, InputGroup} from "@chakra-ui/react";
import { StyledInput } from "components/StyledInput/StyledInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserSignUp } from "redux/auth/operations";
import { selectIsLoggedIn } from "redux/auth/selectors";

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to={'/contacts'} />
    }

    const handleChange = ({ target }) => {
        if (target.name === 'name') {
            setName(target.value);
        } else if (target.name === 'email') {
            setEmail(target.value);
        } else if (target.name === 'password') {
            setPassword(target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {name, email, password};
        console.log(user);
        dispatch(UserSignUp(user));
    }

    return (<Center w={'100%'} h={'100%'} pt={'100px'} pb={'70px'}>
        <FormControl as='form' w={'inherit'} autoComplete="on" onSubmit={handleSubmit}>
            <Flex
                direction={'column'}
                gap={'10px'}
                justifyContent={'center'}
                align={'center'}
                m={0}>

                <Heading as={'h1'}>Sign up</Heading>

                <FormLabel
                    m={0}>Name</FormLabel>
                <StyledInput type={"text"} 
                placeholder={"Enter your name"} 
                name="name" onChange={handleChange} 
                value={name}
                pattern={"^[A-Za-z\u0080-\uFFFF ']+$"}/>

                <FormLabel>Email</FormLabel>
                <StyledInput type={"email"} placeholder={"Enter your email"} name={"email"} value={email} onChange={handleChange}/>

                <FormLabel>Password</FormLabel>
                <InputGroup maxW={{ base: '350px', md: '400px', xl: '550px' }}>
                <StyledInput 
                type={show ? 'text' : 'password'} 
                placeholder={"Generate your unique password"} 
                name={'password'} value={password} 
                onChange={handleChange}
                minLength={7}/>

                {password !== '' && <InputRightElement width='4.5rem' top={'50%'} transform={'translateY(-50%)'}>
                    <Button h='1.75rem' size='sm' onClick={handleClick} colorScheme="teal" variant={'outline'}>
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
                type="submit">Sign Up</Button>
            </Flex>
        </FormControl>
    </Center>)
};

export default Registration;
