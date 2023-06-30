import { Button, FormControl, FormLabel, Flex, Box, Heading } from "@chakra-ui/react";
import { StyledInput } from "components/StyledInput/StyledInput";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import {PiMagicWandLight} from 'react-icons/pi'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameId = nanoid();
    const phoneId = nanoid();

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleChange = ({ target }) => {
        if (target.name === 'name') {
            setName(target.value);
        } else if (target.name === 'phone') {
            setPhone(target.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === phone)) {
            alert(`${name} is already in contacts`);
            reset();
            return;
        }
        const number = phone;
        dispatch(addContact({ name, number }));
        reset();
    }

    const reset = () => {
        setName('');
        setPhone('');
    }

    return (
        <FormControl as={'form'} onSubmit={handleSubmit}>
            <Flex
                direction={'column'}
                justifyContent={'center'}
                align={'center'}
                gap={2}
                m={0}>
                <Heading as="h3"
                    color={'teal.700'}
                    textAlign={"center"}
                    fontSize={{
                        base: '16px',
                        md: '20px'
                    }}
                    maxW={{
                        base: '300px',
                        md: '400px'
                    }}
                    display={"flex"} flexDirection={'row'}><Box as={PiMagicWandLight} size={'24px'} flexShrink={0}/>Creating your own phonebook is simplier than you can imagine</Heading>
                <FormLabel htmlFor={nameId} m={0}>Name</FormLabel>
                <StyledInput id={nameId}
                    value={name}
                    onChange={handleChange}
                    type={"text"}
                    placeholder={"Enter name"}
                    name={"name"}
                    pattern={"^[A-Za-z\u0080-\uFFFF ']+$"} />
                <FormLabel htmlFor={phoneId} m={0}>Phone Number</FormLabel>
                <StyledInput id={phoneId}
                    value={phone}
                    onChange={handleChange}
                    type={"tel"}
                    pattern={"^(+?[0-9.]*)$"}
                    placeholder={"Write phone number"}
                    name={"phone"} />
                <Button
                    colorScheme="teal"
                    variant={'outline'}
                    mt={'5px'}
                    w={'200px'}
                    _hover={{
                        bgColor: 'teal.100'
                    }}
                    gap={'10px'}
                    type="submit" ><Box as={BsFillTelephonePlusFill} 
                    size={'24px'} /> Add Contact</Button>
            </Flex>
        </FormControl>)
};
