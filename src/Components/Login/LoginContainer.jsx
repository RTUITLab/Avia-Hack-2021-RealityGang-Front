import React, {useState} from "react";
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        dispatch(login(email, password))
    }

    if(isAuth) {
        return <Redirect to={'/'} />
    }

    return (
        <Login handleKeyUp={handleKeyUp} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} />
    )
}

export default LoginContainer
