
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Logout from './views/Logout';
import { LOGIN, LOGOUT, PROFILE } from './config/routes/paths';
import { AuthContextProvider } from './contexts/authContext';
import PublicRoute from './components/PublicRoute';
import ProfileRoute from './components/ProfileRoute';
import Detail from './views/Detail';
import FormPutCont from './views/FormPutCont';
import FormCreateCont from './views/FormCreateCont';
import CreateUser from './views/CreateUser'; 
import PutUser from './views/PutUser';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path ={'/'} element={<PublicRoute/>}>
            <Route index element={<Home/>}/>
            <Route path ={LOGIN} element={<Login/>}/>
          </Route>

          <Route path ={PROFILE} element={<ProfileRoute/>}>
            <Route index element={<Profile/>}/>
            <Route path ={"/profile/put-content"} element={<FormPutCont/>}/>
            <Route path ={"/profile/put-user"} element={<PutUser/>}/>
            <Route path ={"/profile/create-content"} element={<FormCreateCont/>}/>
            <Route path ={"/profile/create-user"} element={<CreateUser/>}/>
            <Route path ={"/profile/home"} element={<Home/>}/>
            <Route path ={"/profile/home/:id"} element={<Detail/>}/>
            <Route path ={LOGOUT} element={<Logout/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
