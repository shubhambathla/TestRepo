import {React, useContext, useState, createContext} from 'react'
import ChildContext from './ChildComponents/ChildContext'
import ReactDOM from "react-dom/client";

const UserContext = createContext();
function UseContext() {
 
    const [user, setUser] = useState("Jesse Hall");
  return (
    <div>
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <ChildContext user={user}/>
        </UserContext.Provider>
        
    </div>
  )
}
export {UserContext}
export default UseContext