import React from 'react';
import logo from './vitafamily-logo.png'


function LoginPage(){

    return(
        <div> 
            <div class="contenedor">
                <img class="vflogo" src={logo} alt="VitaFamily">
                <div class="google-btn">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <a href="#" class="btn-text"><b>Iniciar sesión con Google</b></a>
                </div>
                <form class="form" id="login-form">
                    <div class="form-div">
                        <label for="user">Correo</label>
                        <input type="text" id="user" autocomplete="off">
                    </div>
                    <div class="form-div">
                        <label for="password">Contraseña</label>
                        <input type="password" id="password">
                    </div>
                    <div class="form-div" id="submit">
                        <button type="submit" name="login" form="login-form">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
