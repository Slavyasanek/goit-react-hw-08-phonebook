import { Button, Tag, WrapItem, Box } from "@chakra-ui/react";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

export const ContactItem = ({name, number, id}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    
    return (<WrapItem w={'100%'} position={'relative'}>
        <Tag 
            variant={'subtle'} 
            colorScheme="teal" 
            color={'gray.500'}
            mr={'8px'}
            size={{base: 'sm', md: 'md', xl: 'lg'}}>
                {name}</Tag>
        <Tag 
            variant={'outline'} 
            colorScheme="teal"
            size={{base: 'sm', md: 'md', xl: 'lg'}}>{number}</Tag>
        <Button onClick={handleDelete}
                colorScheme="teal"
                borderRadius={'50%'}
                w={{base: '30px', md: '35px'}}
                h={{base: '30px', md: '35px'}}
                minW={'30px'}
                p={0}
                position={'absolute'}
                right={0}
                top={'50%'}
                transform={'translateY(-50%)'}><Box as={RiDeleteBin5Line} size={'20px'}/></Button>
    </WrapItem>)
};
