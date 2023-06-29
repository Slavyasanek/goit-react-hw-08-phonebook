const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")
const { selectIsLoggedIn } = require("redux/contacts/selectors")

const Contacts = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    return (<></>)
}

export default Contacts;