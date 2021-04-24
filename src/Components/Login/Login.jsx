import React from "react";
import s from './login.module.scss'
import cl from 'classnames'
import message from '../../assets/images/message-active.svg'
import padlock from '../../assets/images/padlock-active.svg'

const Login = (props) => {
    return (
        <div className={cl(s.loginContainer)}>
            <form>
                <div className={cl('background-container', s.login)}>
                    <h2 className={s.title}>Авторизация</h2>

                    <div className={s.inputContainer}>
                        <input className={cl('input-text', s.input)} id={'login'} required type="text"/>
                        <label className={s.imgLabel} htmlFor="login"><img src={message} alt="message"/></label>
                    </div>
                    <div className={s.inputContainer}>
                        <input className={cl('input-text' , s.input)} id={'password'} required type="password"/>
                        <label className={s.imgLabel} htmlFor="password"><img src={padlock} alt="padlock"/></label>
                    </div>

                    <button type={'submit'} className={cl('primary-button', s.loginBtn)}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default Login
