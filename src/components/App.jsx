import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { UserRefresh } from "redux/auth/operations";

const Home = lazy(() => import('../pages/Home'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserRefresh());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="signup" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
  );
};
