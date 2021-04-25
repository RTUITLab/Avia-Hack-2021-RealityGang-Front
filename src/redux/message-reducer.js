import {messageApi} from "../api/api";

const SET_MESSAGES = 'SET_MESSAGES'
const SET_MESSAGE_ITEM = 'SET_MESSAGE_ITEM'
const SET_IS_RESPONSE_RECEIVED = 'SET_IS_RESPONSE_RECEIVED'

let initialState = {
    messages: [],
    messageItem: {},
    isResponseReceived: false,
    count: 0, //Общее число заявок
    pageSize: 3, //Сколько карточек выводится на странице, пока стоит единица
    currentPage: 1, //Номер текущей страницы
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.data.messages,
                count: action.data.count,
                currentPage: action.currentPage,
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
                    kml: action.messages.kml,
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

export const setMessages = (data, currentPage) => ({type: SET_MESSAGES, data, currentPage})
export const setMessageItem = (messages) => ({type: SET_MESSAGE_ITEM, messages})
export const setIsResponseReceived = (isResponseReceived) => ({type: SET_IS_RESPONSE_RECEIVED, isResponseReceived})

export const getMessages = (findByLetters, currentPage) => { //Получение заявок пользователей
    return async (dispatch) => {
        try {
            let response = await messageApi.getMessages(findByLetters, currentPage)
            if(response.status === 200) {
                dispatch(setMessages(response.data, currentPage))
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
            console.log('createMessage', response)
            if(response.status === 200) {
                dispatch(setMessageItem(response.data))
                dispatch(setIsResponseReceived(true))
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
            console.log('getCurrentMessage', response)
            if(response.status === 200) {
                dispatch(setMessageItem(response.data))
            }
        }
        catch (error) {
            console.log('getCurrentMessage error', error.toJSON())
            window.alert('getCurrentMessage error')
        }
    }
}

export default messageReducer
