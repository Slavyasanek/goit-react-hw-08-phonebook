import { Flex , VStack} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    return (<Flex
        pt={'70px'} pb={'100px'}  flexDirection={{base: 'column', md: 'row'}} 
        alignItems={'center'}
        justifyContent={'center'}>
        <Player
            src="https://assets10.lottiefiles.com/packages/lf20_ww7gn79d.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: " 300px" }} loop autoplay />
        <VStack fontSize={'24px'} textAlign={'center'} color={'teal.500'} flexGrow={1}>
            <TypeAnimation sequence={['Create your own phonebook, safely saving your contacts', 1000]} />
            <TypeAnimation sequence={[4000, 'Just Sign Up for free and test it!']} />
        </VStack>
    </Flex>)
}

export default Home;
