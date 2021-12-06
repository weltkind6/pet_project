import {addManyUsersAc} from "../../Redux/Reducers/usersReducer";
import {firstLoadAc, preloaderReducerAc} from "../../Redux/Reducers/preloaderReducer";


// export const getCustomers = () => {
//     return function (dispatch) {
//         dispatch(preloaderReducerAc(true))
//         fetch(baseUrl)
//             .then(response => response.json())
//             .then(resp => dispatch(addManyUsersAc(resp)))
//             .then(() => dispatch(preloaderReducerAc(false)))
//             .catch(err => console.log(err))
//     }
// }

// High order function!
export const getCustomers = (url) => (dispatch) => {
    dispatch(preloaderReducerAc(true))
    dispatch(firstLoadAc(true))
    fetch(url)
        .then(response => response.json())
        .then(resp => dispatch(addManyUsersAc(resp)))
        .then(() => dispatch(preloaderReducerAc(false)))
        .catch(err => console.log(err))
}
