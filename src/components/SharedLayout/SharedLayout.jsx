import { Box } from "@chakra-ui/react";
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (<>
        <Header />
        <Box as="main" minW={"480px"}>
            <Container>
                <Suspense >
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    </>)
};

export default SharedLayout;