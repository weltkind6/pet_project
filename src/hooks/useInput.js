import {useState} from "react";

const useInput = initial => {
    const [user, setUser] = useState(initial)
    const onChange = e => {
        setUser(e.target.value)
    }
    return {
        user,
        onChange
    }
}


export default useInput