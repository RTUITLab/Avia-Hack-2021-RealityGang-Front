import React from "react";
import s from './Top.module.scss'
import logo from '../../../../assets/images/logo-2.png'

const Top = (props) => {

    return (
        <div className={s.topContainer}>
            <div className={s.top}>
                <img src={logo} alt="logo"/>
                <div>
                    <button className={s.logoutBtn}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Top
