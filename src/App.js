import {Switch, Route} from 'react-router-dom'
import './App.css';
import Container from "./Components/Container/Container";
import {ToastContainer} from "react-toastify";
import LoginContainer from "./Components/Login/LoginContainer";
import {useEffect} from "react";
import clouds from '../src/assets/images/bottom.svg'
import {useDispatch, useSelector} from "react-redux";
import {initializing} from "./redux/auth-reducer";
import Preloader from "./Common/Preloader/Preloader";

function App() {

    // const notify = () => toast.info("Новость успешно создана");
    // useEffect(() => {
    //     notify()
    // }, []);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializing())
    }, []); // Перезапускать эффект только если count поменялся

    const isInitialize = useSelector(state => state.auth.isInitialize);

    if(!isInitialize) {
        return <Preloader />
    }

    return (
        <>
            <div className={'outer'}>
                <Switch>
                    <Route exact path='/login' render={ () => <LoginContainer />} />
                    <Container />
                </Switch>
                <img width={3000} className={'bottom-clouds'} src={clouds} alt="clouds"/>
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
