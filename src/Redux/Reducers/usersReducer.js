const initialState = {
    userCount: [],
    filteredItems: []
}
console.log(initialState.userCount)
const ADD_USER = 'ADD-USER'
const DELETE_USER = 'DELETE-USER'
const ADD_API_USER = 'ADD-API-USERS'
const FIND_USERS = 'FIND-USERS'
const SORT_USER = 'SORT-USER'

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, userCount: [...state.userCount, action.payload]}
        case DELETE_USER:
            return {...state, userCount: state.userCount.filter(el => el.id !== action.payload)}
        case ADD_API_USER:
            return {...state, userCount: [...state.userCount, ...action.payload]}
        case FIND_USERS:
            return {...state, userCount: state.userCount.filter(el => el.firstName.includes(action.payload))}
        case SORT_USER:
            return {...state, userCount: state.userCount.sort((a, b) => a.id - b.id)}
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
export const findUserAc = payload => ({type: FIND_USERS, payload})
export const sortUsersAc = payload => ({type: SORT_USER, payload})


// What is -action payload- >>>??? PAYLOAD. what is it!!
// answer: payload служит для передачи значений.