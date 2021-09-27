import Sidebar from "../../components/sidebar/Sidebar"
import "./single.css"
import SinglePost from "../../components/singlePost/SinglePost"
import React from 'react';
export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
