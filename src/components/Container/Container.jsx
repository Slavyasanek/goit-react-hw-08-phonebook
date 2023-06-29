import { Box } from "@chakra-ui/react"

export const Container = ({children}) => {
    return (<Box 
    maxW={{sm: '480px', md: '768px', xl: "1200px"}}
    my={0}
    mx={'auto'}
    pl={'15px'}
    pr={'15px'}
    >
        {children}
    </Box>)
}