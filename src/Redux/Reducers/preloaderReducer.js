const initialState = {
    loaded: false,
    alert: null,
    firstLoad: false
}

const GET_LOADED = 'GET-LOADED'
const SHOW_ALERT = 'SHOW-ALERT'
const FIRST_LOAD = 'FIRST_LOAD'

export const preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADED:
            return {...state, loaded: action.payload}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        default: return state
        case FIRST_LOAD:
            return {...state, firstLoad: action.payload}
    }
}

export function preloaderReducerAc(payload) {
    return {
        type: GET_LOADED,
        payload
    }
}
export const firstLoadAc = payload => ({type: FIRST_LOAD, payload})