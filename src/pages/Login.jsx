import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

const Login = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to={'/contacts'}/>
    }
    return(<></>)
}

export default Login;
