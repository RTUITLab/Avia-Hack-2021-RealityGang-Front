import React from "react";
import Top from "./Top";
import {useDispatch} from "react-redux";
import {logout} from "../../../../redux/auth-reducer";

const TopContainer = (props) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={'container'}>
            <Top handleLogout={handleLogout} />
        </div>
    )
}

export default TopContainer
