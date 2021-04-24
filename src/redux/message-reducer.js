import {messageApi} from "../api/api";

const SET_MESSAGES = 'SET_MESSAGES'

let initialState = {
    messages: [],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }

        default:
            return state;
    }
}

export const setMessages = (messages) => ({type: SET_MESSAGES, messages})

export const getMessages = (findByLetters) => { //Получение заявок пользователей
    return async (dispatch) => {
        try {
            let response = await messageApi.getMessages(findByLetters)
            if(response.status === 200) {
                dispatch(setMessages(response.data.messages))
            }
        }
        catch (error) {
            console.log('getMessages error', error.toJSON())
            window.alert('getMessages error')
        }
    }
}
export const createMessage = (description, file) => { //Создать заявку
    return async (dispatch) => {
        try {
            let response = await messageApi.createMessage(description, file)
            // if(response.status === 200) {
            //     dispatch(setMessages(response.data.messages))
            // }
            debugger
        }
        catch (error) {
            console.log('createMessage error', error.toJSON())
            window.alert('createMessage error')
        }
    }
}

export default messageReducer
