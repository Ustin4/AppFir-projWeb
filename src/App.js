import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>

            <div className='app-booker-content'>
                <Routes>
                    <Route path="dialogs/*"
                           element={<Dialogs
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}/>

                    <Route path="profile/*"
                           element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>

                    <Route path="news/*" element={<News/>}/>
                </Routes>


            </div>

        </div>
    )

}


export default App;
