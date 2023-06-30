import { Box } from "@chakra-ui/react";
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsRefreshing } from "redux/auth/selectors";

const SharedLayout = () => {
    const isRefreshing = useSelector(selectIsRefreshing);
    return (<>
        <Header />
        <Box as="main" minW={"480px"}>
            <Container>
                {isRefreshing ? <Loader /> : <Suspense >
                    <Outlet />
                </Suspense>}
            </Container>
        </Box>
    </>)
};

export default SharedLayout;