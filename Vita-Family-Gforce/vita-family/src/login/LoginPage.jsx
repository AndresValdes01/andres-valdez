import React from 'react';
import logo from './logo.jpeg'


function LoginPage(){

    return(
        <div> 
            <img src={logo} className= "imagen"/>
            <h1 className = "login-title" >Pagina de Log in</h1>
        </div>
    )
}

export default LoginPage