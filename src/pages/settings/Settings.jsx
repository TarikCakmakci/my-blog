import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
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
                        <img className="settingsPPImg" 
                        src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v2.png"
                        alt=""/>
                        <label htmlFor="fileInput">
                            
                        </label>
                    </div>
                </form>
        
            </div>

            <Sidebar/>
        </div>
    )
}
