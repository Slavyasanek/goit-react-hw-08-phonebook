import { FormLabel, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/slice";

export const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <>
            <FormLabel>Find contacts by name</FormLabel>
            <Input type="text"
                name="filter"
                onChange={handleChange} />
        </>
    )
};
