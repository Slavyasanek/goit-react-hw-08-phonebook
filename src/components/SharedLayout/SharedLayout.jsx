import { Box } from "@chakra-ui/react";
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectIsRefreshing } from "redux/auth/selectors";
import { selectIsLoading } from "redux/contacts/selectors";

const SharedLayout = () => {
    const isRefreshing = useSelector(selectIsRefreshing);
    const isLoading = useSelector(selectIsLoading);
    return (<>
        <Header />
        <Box as="main" minW={"480px"}>
            <Container>
                {isLoading && <Loader/>}
                {isRefreshing ? <Loader /> : <Suspense >
                    <Outlet />
                </Suspense>}
            </Container>
        </Box>
    </>)
};

export default SharedLayout;