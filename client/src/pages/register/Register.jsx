import { Link } from "react-router-dom"
import "./register.css"
import React from 'react';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">KAYIT OL</span>
        <form className="registerForm">
            <label>Kullanıcı Adı</label>
                <input type="text" className="registerInput" placeholder="Kullanıcı adınızı giriniz..."></input>
            <label>Email</label>
                <input type="text" className="registerInput" placeholder="Mail adresinizi giriniz..."></input>
            <label>Şifre</label>
                <input type="password" className="registerInput" placeholder="Şifrenizi giriniz..."></input>    
            <button className="registerButton">
                <Link to="/register" className="link"></Link>KAYIT OL</button>  
            <button className="registerLoginButton">
                <Link to="/login" className="link"></Link>GİRİŞ YAP</button>     
        </form>
        
        

    </div>
       
    )
}
