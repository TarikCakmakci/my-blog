import React from 'react';
import "./contact.css"

export default function Contact() {
    return (
    <div className="contact">
        
            <span className="contactTitle">İLETİŞİM</span>
        <form className="contactForm">
            <label>Kullanıcı Adı</label>
                <input type="text" className="contactInput" placeholder="Kullanıcı adınızı giriniz..."></input>
            <label>Email</label>
                <input type="text" className="contactInput" placeholder="Mail adresinizi giriniz..."></input>
            <label>Mesajınız</label>
                <input type="text" className="contactInputMsg" placeholder="Mesajınızı giriniz..."></input>    
            <button className="contactButton">Gönder</button>
           
        </form>
    </div>
    )
}
