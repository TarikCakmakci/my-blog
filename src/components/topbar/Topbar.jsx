import "./topbar.css"

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
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v2.png"alt=""/>
                <ul className="signItem">Giriş</ul>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
           
         
        </div>
    )
}
