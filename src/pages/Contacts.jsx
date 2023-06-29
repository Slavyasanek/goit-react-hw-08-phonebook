import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";

const Contacts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    return (<></>)
}

export default Contacts;