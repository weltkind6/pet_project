import {addManyUsersAc} from "../../Redux/Reducers/usersReducer";
import {preloaderReducerAc} from "../../Redux/Reducers/preloaderReducer";
import {baseUrl2} from "../API";


export const getCustomers = () => {
    return function (dispatch) {
        dispatch(preloaderReducerAc(true))
        fetch(baseUrl2)
            .then(response => response.json())
            .then(resp => dispatch(addManyUsersAc(resp)))
            .then(() => dispatch(preloaderReducerAc(false)))
            .catch(err => console.log(err))
    }
}