import {addManyUsersAc} from "../../Redux/Reducers/usersReducer";
import {preloaderReducerAc} from "../../Redux/Reducers/preloaderReducer";
import {baseUrl} from "../API";


export const getCustomers = () => {
    return function (dispatch) {
        dispatch(preloaderReducerAc(true))
        fetch(baseUrl)
            .then(response => response.json())
            .then(resp => dispatch(addManyUsersAc(resp)))
            .then(() => dispatch(preloaderReducerAc(false)))
            .catch(err => console.log(err))
    }
}