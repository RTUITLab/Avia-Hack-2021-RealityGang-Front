import React from "react";
import s from './Account.module.scss'
import cl from 'classnames'
import {motion} from "framer-motion"
import {NavLink} from "react-router-dom";
import loupe from './../../../../assets/images/loupe.svg'
import MessageItem from "./MessageItem/MessageItem";
import Paginator from '../../../../Common/Paginator/Paginator'

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
                        <input onKeyUp={props.handleKeyUp} value={props.findByLetters} onChange={e => props.setFindByLetters(e.target.value)} placeholder={'Поиск по номеру или по описанию заявки'} className={cl('input-text', s.input)} id={'search'} type="text"/>
                        <label className={s.searchLabel} htmlFor="search"><button onClick={props.handleSubmit}><img src={loupe} alt="loupe"/></button></label>
                    </div>
                    {
                        props.messages &&
                            props.messages.length > 0 ?
                            <div>
                                <motion.div
                                    variants={props.animationContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {
                                        props.messages.map(m => {
                                            return (
                                                <MessageItem key={m.id} {...m} animationItem={props.animationItem} />
                                            )
                                        })
                                    }
                                </motion.div>
                                    <Paginator totalItemsCount={props.count}
                                        pageSize={props.pageSize}
                                        currentPage={props.currentPage}
                                        onPageChanged={props.onPageChanged} />
                            </div>
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
