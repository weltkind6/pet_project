const initialState = {
    loaded: false,
    alert: null
}

const GET_LOADED = 'GET-LOADED'
const SHOW_ALERT = 'SHOW-ALERT'

export const preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADED:
            return {...state, loaded: action.payload}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        default: return state
    }
}

export function preloaderReducerAc(payload) {
    return {
        type: GET_LOADED,
        payload
    }
}
export const showAlertAc = payload => ({type: SHOW_ALERT, payload})