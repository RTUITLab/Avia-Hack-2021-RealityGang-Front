import React from "react";
import {Route, Switch} from "react-router-dom";
import MainContainer from "./Main/MainContainer";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";
import {useSelector} from "react-redux";
import TopContainer from "./Main/Top/TopContainer";
import AccountContainer from "./Main/Account/AccountContainer";

const Container = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <>
            <div className={'container'}>

                {
                    isAuth &&
                        <>
                            <TopContainer />
                        </>
                }

                <Switch>
                    <Route exact path='/new' render={ () => <CreateMessageContainer />} />
                    <Route exact path='/' render={ () => <MainContainer />} />
                </Switch>
            </div>
        </>
    )
}

export default Container
