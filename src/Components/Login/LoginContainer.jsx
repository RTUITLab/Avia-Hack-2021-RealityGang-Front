import React, {useState} from "react";
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'
import {login} from "../../redux/auth-reducer";
import {motion} from "framer-motion";

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

    const animations = {
        hidden: {
            opacity: 0,
            x:0,
            y: 100,
        },
        visible: {
            opacity: 1,
            x:0,
            y:0,
        }
    }

    return (
        <motion.div variants={animations} initial="hidden" animate="visible"
                    transition={{ duration: 1 }}
        >
            <Login handleKeyUp={handleKeyUp} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} />
        </motion.div>
    )
}

export default LoginContainer
