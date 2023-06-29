import { Box } from "@chakra-ui/react"

export const Container = ({children}) => {
    return (<Box 
    maxW={{sm: '480px', md: '768px', xl: "1200px"}}
    my={0}
    mx={'auto'}
    pr={{sm: '0', md: '15px'}}
    pl={{sm: '0', md: '15px'}}>
        {children}
    </Box>)
}