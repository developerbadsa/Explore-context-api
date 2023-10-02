import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Firebase_config/Firebase_config";



export const userContext = createContext(null);



const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
        });
        return unSubscribe
    }, [])

    const createUserWithEmailAndPass = (email, password) => {


        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const logout = ()=>{
        return signOut (Auth)
    }




    const obj = {
        createUserWithEmailAndPass, user, logout
    }





    return (
        <userContext.Provider value={obj}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;