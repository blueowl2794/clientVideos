import {createContext, useCallback, useContext, useMemo, useState} from "react";
import axios from 'axios';

const ROLE ='role'
const NAME ='name'
const EMAIL ='email'
const CREATE ='createdAt'
const ID ='id'
const TK ='token'

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(NAME)??false);

    const login = useCallback(async function(data){
        await axios.post("http://localhost:3000/signin" , data , {withCredentials: true}  )//{ withCredentials: true }
        .then((c)=>{
            axios.defaults.headers.common['Authorization']=`Bearer ${c.data.token}`;
            console.log("c", c.data.user);
            const role = c.data.user.role.map(i=>i.role)
            window.localStorage.setItem(ROLE,role);
            window.localStorage.setItem(NAME,c.data.user.name);
            window.localStorage.setItem(EMAIL,c.data.user.email);
            window.localStorage.setItem(CREATE,c.data.user.createdAt);
            window.localStorage.setItem(ID,c.data.user.id);
            window.localStorage.setItem(TK,c.data.token);
            
            
        })
        setIsAuthenticated(true);
    },[])

    const logout = useCallback(function(){
        window.localStorage.removeItem(ROLE);
        window.localStorage.removeItem(NAME);
        window.localStorage.removeItem(EMAIL);
        window.localStorage.removeItem(CREATE);
        window.localStorage.removeItem(ID);
        window.localStorage.removeItem(TK);
        setIsAuthenticated(false);
    },[])

    const value = useMemo(
        ()=> ({
            login,
            logout,
            isAuthenticated
        }) ,[login,logout,isAuthenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// AuthContextProvider.propTypes = {
//     children: PropTypes.object
// };

export function useAuthContext() {
    return useContext(AuthContext);
}