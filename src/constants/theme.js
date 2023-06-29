import { extendTheme } from "@chakra-ui/react";

//blue
export const theme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'teal.900',
                bg: 'teal.50',
                fontFamily: `"Roboto", "Noto", sans-serif`,
            }
        }
    },
    fonts: {
        heading: `"Roboto", "Noto", sans-serif`
    }
});