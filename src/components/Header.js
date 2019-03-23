/*
FileName: Header.js
Author: Caitlin Huang
Description:  This program presents the header of the search and result page
*/

import React from "react";
import title from "../assets/nasa_logo-large.ee501ef4.png";

const Header = () => {
  return (
    <div class="container-fluid header1">
      <div className="row justify-content-center">
        <div className="col-8 offset-2  text-center  ">
          <h2> Welcome to the NASA Image and Video Library</h2>
        </div>
        <div className="col-2 logo right .d-sm-none .d-md-block">
          <img className="rounded-circle" source={title} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
