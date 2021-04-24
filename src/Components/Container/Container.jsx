import React from "react";
import {Route, Switch} from "react-router-dom";
import MainContainer from "./Main/MainContainer";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";
import {useSelector} from "react-redux";
import TopContainer from "./Main/Top/TopContainer";
import Pending from "./CreateMessage/Pending/Pending";
import Test from "./Test/Test";

const Container = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <>


                {
                    isAuth &&
                        <>
                            <TopContainer />
                        </>
                }

                <Switch>
                    <Route exact path='/' render={ () => <MainContainer />} />
                    <div className={'container'}>
                        <Switch>
                            <Route exact path='/new' render={ () => <CreateMessageContainer />} />
                            <Route exact path='/pending' render={ () => <Pending />} />
                            <Route exact path='/test' render={ () => <Test />} />
                        </Switch>
                    </div>
                </Switch>
        </>
    )
}

export default Container
