import "./sidebar.css"

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">HAKKIMDA</span>
                <img className="aboutMeImg" src="http://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at labore, vel, illum vitae ipsum odio delectus iste unde officia quas.</p>
            </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">KATEGORİLER</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Sinema</li>
         </ul>
        </div>
        <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-linkedin"></i>
                <i className="sidebarIcon fab fa-github"></i>
             </div>
        </div>
        </div>
    )
}
