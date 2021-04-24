import React from "react";
import {Route, Switch} from "react-router-dom";
import MainContainer from "./Main/MainContainer";

const Container = (props) => {
    return (
        <>
            <div className={'container'}>
                <Switch>
                    <Route exact path='/' render={ () => <MainContainer />} />
                </Switch>
            </div>
        </>
    )
}

export default Container
