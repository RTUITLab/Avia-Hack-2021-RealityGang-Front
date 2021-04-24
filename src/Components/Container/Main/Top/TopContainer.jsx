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
        <Top handleLogout={handleLogout} />
    )
}

export default TopContainer
