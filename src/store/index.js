import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "../Redux/Reducers/usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {preloaderReducer} from "../Redux/Reducers/preloaderReducer";



const rootReducer = combineReducers({
    user: usersReducer,
    preloader: preloaderReducer
})
// Подключаем мидлварэ в девтулзы.
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

