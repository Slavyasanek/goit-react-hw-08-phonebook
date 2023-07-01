import { FormLabel, Input, InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/slice";
import { FaSearch } from 'react-icons/fa';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterId = nanoid()
    const handleChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <>
            <FormLabel htmlFor={filterId}
                fontSize={{ base: '20px', xl: '22px' }}>You can also find contacts by name</FormLabel>
            <InputGroup>
                <Input type="text"
                    name="filter"
                    id={filterId}
                    placeholder="Searching by name..."
                    onChange={handleChange}
                    variant={'outline'}
                    focusBorderColor="teal.500"
                    bgColor={'whiteAlpha.700'}
                    color={'teal.500'}
                    fontWeight={600}
                    _placeholder={{ color: 'teal.900', fontWeight: 600 }}
                    value={useSelector(selectFilter)}
                    maxW={'400px'}
                    role="group"
                />
                <InputRightElement w={'20px'} right={'10px'} _groupFocusWithin={{color: 'teal.500'}}>
                    <Box as={FaSearch} size={'24px'} />
                </InputRightElement>
            </InputGroup>
        </>
    )
};
