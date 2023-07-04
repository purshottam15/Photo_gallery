import React from 'react'
import '../App.css';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";


export default function navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <h2 id='logo'>Woision</h2>

        </div>
        <div className="navbar_content">
            <ul className="navbar_item">
                <li className="list_item"><Link to="/">Home</Link></li>
                <li className="list_item">About</li>
                <li className="list_item"><Link to="/*" style={{textDecoration:'none'}}>Gallery</Link></li>
                
                
            </ul>

        </div>
      </div>

    </div>
  )
}
