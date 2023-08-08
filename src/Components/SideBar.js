import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {

  const isMenuOpen = useSelector((Store)=>Store.app.isMenuOpen)

  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Videos</li>
        <li>Lives</li>
        <li>Shorts</li>
      </ul>

      <h1 className="font-bold pt-5">Subsscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold py-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default SideBar;
