const initialState = {
    loaded: false,
}

const GET_LOADED = 'GET-LOADED'

export const preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADED:
            return {...state, loaded: action.payload}
        default: return state
    }
}

export function preloaderReducerAc(payload) {
    return {
        type: GET_LOADED,
        payload
    }
}