import {Switch, Route} from 'react-router-dom'
import './App.css';
import Container from "./Components/Container/Container";
import {toast, ToastContainer} from "react-toastify";
import LoginContainer from "./Components/Login/LoginContainer";
import {useEffect} from "react";
import clouds from '../src/assets/images/bottom.svg'

function App() {

    // const notify = () => toast.info("Новость успешно создана");
    // useEffect(() => {
    //     notify()
    // }, []);


    return (
        <>
            <div className={'outer'}>
                <Switch>
                    <Route exact path='/login' render={ () => <LoginContainer />} />
                    <Container />
                </Switch>
                <img className={'bottom-clouds'} src={clouds} alt="clouds"/>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
