import "./topbar.css"
import kai from '../../components/images/kai.jpg'
import { Link } from "react-router-dom";
export default function Topbar() {
    const user = false;
    return (
        
        <div className="top">
            <div className="topLeft">
                <a href="https://www.github.com/tarikcakmakci">
                    <i className="topIcon fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/tarikcakmakci/">
                    <i className="topIcon fab fa-linkedin"></i>
                </a>
               
                
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                     <Link to="/" className="link" >ANASAYFA</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/" className="link" >HAKKIMDA</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/" className="link" >İLETİŞİM</Link>
                    </li> 
                    <li className="topListItem">
                    <Link to="/write" className="link" >WRITE</Link>
                        </li>
                    <li className="topListItem">
                        {user && "ÇIKIŞ YAP"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
            {
                user ? (
                    <img className="topImg" src={kai}alt=""/>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link to="/login" className="link">GİRİŞ YAP</Link>
                        </li>
                   
                        <li className="topListItem">
                        <Link to="/register" className="link">KAYIT OL</Link>
                        </li>
                    </ul>
                )
            }
             <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
   
                     );
}
     
                    
                     

                
            
                
               
            
    
            
