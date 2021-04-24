import React from "react";
import s from './login.module.scss'
import cl from 'classnames'
import message from '../../assets/images/message-active.svg'
import padlock from '../../assets/images/padlock-active.svg'

const Login = (props) => {
    return (
        <div className={cl(s.loginContainer)}>
            {/*<form action=''>*/}
                <div className={cl('background-container', s.login)}>
                    <h2 className={s.title}>Авторизация</h2>

                    <div className={s.inputContainer}>
                        <input onKeyUp={props.handleKeyUp} value={props.email} onChange={(e) => props.setEmail(e.target.value)} placeholder={'E-mail'} className={cl('input-text', s.input)} id={'login'} required type="text"/>
                        <label className={s.imgLabel} htmlFor="login"><img src={message} alt="message"/></label>
                    </div>
                    <div className={s.inputContainer}>
                        <input onKeyUp={props.handleKeyUp} value={props.password} onChange={(e) => props.setPassword(e.target.value)} placeholder={'Password'} className={cl('input-text' , s.input)} id={'password'} required type="password"/>
                        <label className={s.imgLabel} htmlFor="password"><img src={padlock} alt="padlock"/></label>
                    </div>

                    <button onClick={props.handleSubmit} type={'submit'} className={cl('primary-button', s.loginBtn)}>Войти</button>
                </div>
            {/*</form>*/}
        </div>
    )
}

export default Login
