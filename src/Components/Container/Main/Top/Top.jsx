import React from "react";
import s from './Top.module.scss'
import logo from '../../../../assets/images/logo-2.png'
import {NavLink} from "react-router-dom";

const Top = (props) => {

    return (
        <div className={s.topContainer}>
            <div className={s.top}>
                <NavLink to={'/'}>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <div>
                    <button onClick={props.handleLogout} className={s.logoutBtn}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Top
