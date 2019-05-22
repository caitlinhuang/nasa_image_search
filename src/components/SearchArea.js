/*
FileName: SearchArea.js
Author: Caitlin Huang
Description:  This program sets up the the search area and a pull down menu to all users
to choose the media types
*/
import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area justify-content-md-center">
      <br />
      <div className="row justify-content-md-center">
        <form onSubmit={props.searchImage} action="">
          <div className="form-row align-items-center">
            <div className="col-auto col-xs-12 search">
              <input
                type="text"
                className="form-control search_input mb-2"
                placeholder="Search for..."
                onChange={props.handleChange}
              />
            </div>
            <div className="col-auto col-xs-12">
              <select className="form-control mb-2" onChange={props.handleMedia}>
                <option selected>Choose Media...</option>
                <option value="image">image</option>
                <option value="video">video</option>
                <option value="audio">audio</option>
                <option value="all">all</option>
              </select>
            </div>

            <div className="col-auto col-xs-12 mb-2 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchArea;
