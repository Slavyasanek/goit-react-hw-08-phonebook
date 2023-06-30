import { Center, Spinner } from "@chakra-ui/react"

export const Loader = () => {
    return (<Center
    position={'fixed'}
    top={0}
    left={0}
    w={'100%'}
    h={'100%'}
    bgColor={'blackAlpha.500'}
    zIndex={999}>
        <Spinner
        size={'xl'}
        emptyColor="teal.100"
        color="teal.700"
        speed="1s"/>
    </Center>)
}