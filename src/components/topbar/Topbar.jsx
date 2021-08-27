import "./topbar.css"
import kai from '../../components/images/kai.jpg'
export default function Topbar() {
    return (
        
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-github"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Anasayfa</li>
                    <li className="topListItem">Hakkımda</li>
                    <li className="topListItem">İletişim</li> 
                    <li className="topListItem">Paylaşmak istersen?</li>
                    <li className="topListItem">Çıkış Yap</li>
                    
                </ul>
            </div>
            <div className="topRight">
            
                <img className="topImg" src={kai}alt=""/>
                <ul className="signItem">Giriş</ul>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
           
         
        </div>
    )
}
