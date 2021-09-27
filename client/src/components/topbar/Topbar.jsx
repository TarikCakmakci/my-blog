import "./topbar.css"
import kai from '../../components/images/kai.jpg'
import { Link } from "react-router-dom";
import React from 'react';
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
                    
                     <Link to="/" className="link" > 
                     <i class="homeIcon fas fa-home"></i>
                     
                     ANASAYFA
                     
                     </Link>
                    </li>
                    <li className="topListItem">

                    <Link to="/about" className="link" >
                    <i class="aboutIcon fas fa-address-card"></i>HAKKIMDA</Link>
                    </li>

                    <li className="topListItem">

                    <Link to="/contact" className="link" >
                    <i class="connectIcon fas fa-comment-dots"></i>İLETİŞİM</Link>
                    </li> 

                    <li className="topListItem">

                    <Link to="/write" className="link" >
                    <i class="writeIconn fas fa-pen-alt"></i>WRITE</Link>
                    </li>

                    <li className="topListItem">
                    
                         {user && "ÇIKIŞ YAP" && <i class="logoutIcon fas fa-sign-out-alt"></i>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
            {
                user ? ( 
                    <img className="topImg" src={kai}alt="" />
                     
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link to="/login" className="link">GİRİŞ</Link>
                        </li>
                   
                        <li className="topListItem">
                        <Link to="/register" className="link">KAYIT</Link>
                        </li>
                        <i className="topSearchIcon fas fa-search">
                             <p>ARAMA YAP
                             </p>
                        </i>
                    </ul>
                )
            }
            
           
            </div>
        </div>
   
                     );
}
     
                    
                     

                
            
                
               
            
    
            
