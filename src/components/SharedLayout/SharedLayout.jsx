import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (<>
    <Header/>
    <Suspense >
        <Outlet/>
    </Suspense>
    </>)
};

export default SharedLayout;