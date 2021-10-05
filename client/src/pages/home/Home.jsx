import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";

export default function Home() {
   
    return (
        <>
            <Header />
            <div className="homepage">
               <Posts />
               <Sidebar />
            </div>
        </>
    )
    }