import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import kai from '../../components/images/kai.jpg'
import React from 'react';
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Profilini Güncelle</span>
                    <span className="settingsDeleteTitle">Profilini Sil</span>
                </div>
                <form className="settingsForm">
                    <label>Profil Fotoğrafı</label>
                    <div className="settingsPP">
                        <img className="settingsPP" 
                        src={kai}
                        alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle" title="Değiştirmek için tıkla"> </i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                <label>Kullanıcı Adı</label>
                    <input type="text" placeholder="Kai"/>
                <label>E-Mail</label>
                    <input type="email" placeholder="kai@gmail.com"/>
                <label>Şifre</label>
                    <input type="password"/>
                <button className="settingsSubmit">Güncelle</button>
                </form>
            </div>

            <Sidebar/>
        </div>
    )
}
