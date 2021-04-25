import React, {useEffect, useState} from "react";
import Account from "./Account";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../../../redux/message-reducer";
import {motion} from "framer-motion"

const AccountContainer = (props) => {

    const dispatch = useDispatch();
    const [findByLetters, setFindByLetters] = useState('')
    const messages = useSelector(state => state.messages.messages);
    const count = useSelector(state => state.messages.count);
    const pageSize = useSelector(state => state.messages.pageSize);
    const currentPage = useSelector(state => state.messages.currentPage);

    useEffect(()=> {
        dispatch(getMessages(findByLetters, 1))
    }, [])

    const handleSubmit = () => {
        dispatch(getMessages(findByLetters, 1))
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    const onPageChanged = (pageNumber) => { // Поиск по новой странице + изменение текущей
        dispatch(getMessages(findByLetters, pageNumber))
    }

    const animationContainer = {
        hidden: {opacity: 1, scale: 1},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }
    const animationItem = {
        hidden: {x: -100, y: 20, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
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
        <div className={'container'}>
            <motion.div variants={animations} initial="hidden" animate="visible"
                        transition={{ duration: 1 }}>
                <Account messages={messages} setFindByLetters={setFindByLetters} findByLetters={findByLetters}
                         handleKeyUp={handleKeyUp} handleSubmit={handleSubmit} animationContainer={animationContainer}
                         animationItem={animationItem} onPageChanged={onPageChanged} pageSize={pageSize}
                         count={count} currentPage={currentPage}
                />
            </motion.div>
        </div>
    )
}

export default AccountContainer
