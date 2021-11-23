const initialState = {
    users: [],
    searchFilter: [],
    searchText: '',
    sortedUsers: []
}

const ADD_USER = 'ADD-USER'
const DELETE_USER = 'DELETE-USER'
const ADD_API_USER = 'ADD-API-USERS'
const FILTERED_USERS = 'FILTERED_USERS'
const SORT_USERS = 'SORT_USERS'

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case DELETE_USER:
            return {...state, users: state.users.filter(el => el.id !== action.payload)}
        case ADD_API_USER:
            return {...state, users: [...state.users, ...action.payload]}
        case FILTERED_USERS: {
            return {...state, searchFilter: [...state.users], searchText: action.payload}
        }
        case SORT_USERS: {
            return {...state, sortedUsers: [...state.users]}
        }
        default:
            return state
    }
}
// Функции которые создают екшоны
export const addUserActionCreator = payload => ({type: ADD_USER, payload})
export function deleteUserActionCreator(payload) {
    return {
        type: DELETE_USER,
        payload
    }
}
export const addManyUsersAc = payload => ({type: ADD_API_USER, payload})
export const searchFilterAc = searchText => ({type: FILTERED_USERS, payload: searchText})
export const sortedUsersAc = payload => ({type: SORT_USERS, payload})



// What is -action payload- >>>??? PAYLOAD. what is it!!
// answer: payload служит для передачи значений.