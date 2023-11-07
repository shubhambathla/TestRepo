import React from 'react'
import { useState, createContext, useContext } from "react";
import { UserContext } from '../../Components/UseContext';


function Component3() {
    const user = useContext(UserContext);

  return (
    <div>Component3
        Content in Component 3:{user}
    </div>
  )
}

export default Component3