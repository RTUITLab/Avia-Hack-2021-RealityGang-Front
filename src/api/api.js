import * as axios from "axios";

let baseUrl = process.env.REACT_APP_PRODUCTION_URL

if(baseUrl === undefined) {
    // window.alert('Не удалось получить доступ к переменной окружения REACT_APP_PRODUCTION_URL')
}

const getFormData = (mass) => {
    let formdata = new FormData();

    mass.map(m => {
        return formdata.append(m.name, m.value);
    })

    return formdata;
}

export const authApi = {
    login(username, password) { //Логин
        let data = getFormData([{name: 'username', value: username}, {name: 'password', value: password}])
        return axios.post(baseUrl + `auth/jwt/create`, data)
    },

    initializing() { //Проверка на логин
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.get(baseUrl +`api/is_authenticated`,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            })
    },
}

export const messageApi = {
    getMessages(findByLetters) { //Логин
        let data = getFormData([{name: 'find_by_letters', value: findByLetters}])
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.post(baseUrl +`api/get_messages`, data,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            })
    },
}
