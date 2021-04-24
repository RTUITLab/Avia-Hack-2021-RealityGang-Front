import React, {useEffect, useState} from "react";
import Account from "./Account";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../../../redux/message-reducer";

const AccountContainer = (props) => {

    const dispatch = useDispatch();
    const [findByLetters, setFindByLetters] = useState('')

    useEffect(()=> {
        dispatch(getMessages(findByLetters))
    }, [])

    const handleSubmit = () => {
        dispatch(getMessages(findByLetters))
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    const messages = useSelector(state => state.messages.messages);

    return (
        <div className={'container'}>
            <Account messages={messages} setFindByLetters={setFindByLetters} findByLetters={findByLetters}
                     handleKeyUp={handleKeyUp} handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AccountContainer
