import { Input } from "@chakra-ui/react"

export const StyledInput = ({ type, placeholder, name, value, onChange, pattern, minLength }) => {
    return (<>
        <Input type={type} required
            colorScheme="teal"
            variant={'outline'}
            placeholder={placeholder}
            focusBorderColor="teal.500"
            maxW={{ base: '350px', md: '400px', xl: '550px' }}
            fontSize={'20px'}
            p={'15px 20px'}
            h={'60px'}
            border={'2px'}
            borderColor={'teal.200'}
            outline={'none'}
            _hover={{
                borderColor: 'teal.300'
            }} 
            name={name}
            value={value}
            onChange={onChange}
            pattern={pattern}
            minLength={minLength}/>
    </>)
}