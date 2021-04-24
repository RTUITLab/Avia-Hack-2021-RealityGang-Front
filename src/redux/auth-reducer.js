import {authApi} from "../api/api";

const SET_IS_FETCH = 'SET_IS_FETCH'
const SET_IS_AUTH = 'SET_IS_AUTH'

let initialState = {
    isFetch: false,
    isAuth: false, //Залогинен ли пользователь
    isInitialize: false, //Инициализация приложения
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCH:
            return {
                ...state,
                isFetch: action.isFetch
            }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetch) => ({type: SET_IS_FETCH, isFetch})


export const login = (username, password) => { //Логин
    return async (dispatch) => {

    }
}

export default authReducer
