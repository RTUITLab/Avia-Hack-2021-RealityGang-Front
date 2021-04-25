import {messageApi} from "../api/api";

const SET_MESSAGES = 'SET_MESSAGES'
const SET_MESSAGE_ITEM = 'SET_MESSAGE_ITEM'
const SET_IS_RESPONSE_RECEIVED = 'SET_IS_RESPONSE_RECEIVED'

let initialState = {
    messages: [],
    messageItem: {},
    isResponseReceived: false,
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case SET_IS_RESPONSE_RECEIVED:
            return {
                ...state,
                isResponseReceived: action.isResponseReceived
            }
        case SET_MESSAGE_ITEM:
            return {
                ...state,
                messageItem: {
                    answer: action.messages.answer,
                    correct: action.messages.correct,
                    created_at: action.messages.created_at,
                    description: action.messages.description,
                    id: action.messages.id,
                    incorrect: action.messages.incorrect,
                }
            }
        default:
            return state;
    }
}

export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const setMessageItem = (messages) => ({type: SET_MESSAGE_ITEM, messages})
export const setIsResponseReceived = (isResponseReceived) => ({type: SET_IS_RESPONSE_RECEIVED, isResponseReceived})

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
            if(response.status === 200) {
                dispatch(setIsResponseReceived(true))
                dispatch(setMessageItem(response.data))
            }
        }
        catch (error) {
            console.log('createMessage error', error.toJSON())
            window.alert('createMessage error')
        }
    }
}
export const getCurrentMessage = (id) => { //Получить контретную заявку

    return async (dispatch) => {
        try {
            let response = await messageApi.getCurrentMessage(id)
            if(response.status === 200) {
                debugger
                dispatch(setMessageItem(response.data))
            }
        }
        catch (error) {
            console.log('createMessage error', error.toJSON())
            window.alert('createMessage error')
        }
    }
}

export default messageReducer
