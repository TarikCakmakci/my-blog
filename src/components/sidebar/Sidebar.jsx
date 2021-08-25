import "./sidebar.css"

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">HAKKIMDA</span>
                <img className="sidebarImg" src="https://i.pinimg.com/280x280_RS/68/34/d3/6834d39e0827d91b4e1267e05f154d13.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at labore, vel, illum vitae ipsum odio delectus iste unde officia quas.</p>
            </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORİLER</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Hayat</li>
            <li className="sidebarListItem">Müzik</li>
            <li className="sidebarListItem">Giyim</li>
            <li className="sidebarListItem">Spor</li>
            <li className="sidebarListItem">Teknoloji</li>
            <li className="sidebarListItem">Sinema</li>
            <li className="sidebarListItem">Ahmet</li>
         </ul>
        </div>
        <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW ME</span>
             <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-linkedin"></i>
                <i className="sidebarIcon fab fa-github"></i>
             </div>
        </div>
        </div>
    )
}