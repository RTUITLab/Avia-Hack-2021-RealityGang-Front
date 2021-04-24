import React from "react";
import s from './Account.module.scss'
import cl from 'classnames'
import {NavLink} from "react-router-dom";
import loupe from './../../../../assets/images/loupe.svg'
import Message from "./Message/Message";

const Account = (props) => {

    return (
        <div className={s.accountContainer}>
            <div className={cl("background-container", s.account)}>
                <div className={s.top}>
                    <h2 className={s.title}>Список заявок</h2>
                    <NavLink className={cl('primary-button', s.addBtn)} to={'/new'}>
                        Создать новую заявку
                    </NavLink>
                </div>
                <div className={s.content}>
                    <div className={s.search}>
                        <input placeholder={'Поиск по номеру или по описанию заявки'} className={cl('input-text', s.input)} id={'search'} type="text"/>
                        <label className={s.searchLabel} htmlFor="search"><img src={loupe} alt="loupe"/></label>
                    </div>
                    {
                        props.messages &&
                            props.messages.length > 0 ?
                            props.messages.map(m => {
                                return (
                                    <Message key={m.id} {...m} />
                                )
                            })
                        :
                            <div className={s.accountEmpty}>
                                Список заявок пуст
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Account
