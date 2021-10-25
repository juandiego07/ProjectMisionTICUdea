import { onAuthStateChanged } from '@firebase/auth';
import {auth} from '../../Firebase'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserProvider = (props) => {

    const [userLogged, setUserLogged] = useState(undefined);
    const [isLogIn, setIsLogIn] = useState(false);

    useEffect(() => {
      onAuthStateChanged(auth, function (user) {
        if (user) {
          //console.log("Usuario logueado");
        } else {
          //console.log("Usuario deslogueado");
        }
      });
    }, [setUserLogged]);

    return (
      <UserContext.Provider
        value={{ userLogged, setUserLogged, isLogIn, setIsLogIn }}
      >
        {props.children}
      </UserContext.Provider>
    );
}


export default UserProvider
