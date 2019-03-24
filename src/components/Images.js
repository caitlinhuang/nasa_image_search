/*
FileName: Images.js
Author: Caitlin Huang
Description:  This program sets up the page that allows users to enter the search term,
choose the media types and filter the results by year range.  This program also displays
the search results
*/

import React, { Component } from "react";
import SearchArea from "./SearchArea";
import { connect } from 'react-redux';
import mediaAllSearch  from '../actions/mediaSearchAction'; 
import YearPicker from "react-year-picker";
import "../css/yearPicker.css";
import audioImage from "../assets/audio.png";
import { Link } from 'react-router-dom'


class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //images: [],
      searchField: "",
      media_type: "",
      sYear: 1900,
      eYear: 2999
    };

    this.filteredImages = [];
  }

  handleChange = e => {
    console.log("searchField=" + e.target.value);

    this.setState({
      searchField: e.target.value
    });
    console.log(this.state.searchTerm);
  };

  handleMedia = e => {
    console.log(e.target.value);
    if(e.target.value === 'all'){
      this.setState({
        media_type: 'image,video,audio'
      })
    }else{
      this.setState({
        media_type: e.target.value
      });
    }
  };

  searchImage = e => {
    e.preventDefault();
    let searchTerm =
      this.state.media_type === null ||
      this.state.media_type === undefined ||
      this.state.media_type === "all"
        ? "search?q=" + this.state.searchField
        : "search?q=" +
          this.state.searchField +
          "&media_type=" +
          this.state.media_type +
          "&year_start=" +
          this.state.sYear +
          "&year_end=" +
          this.state.eYear;
    console.log(this.state);
    this.props.mediaAllSearch(searchTerm)
  };

  handleYear1 = e => {
    console.log(e);
    this.setState({
      sYear: e
    });
  };

  handleYear2 = e => {
    console.log(e);
    this.setState({
      eYear: e
    });
  };

  //year dropdown box
  onYearChange = e => {
    console.log("selected value:", e.target.value);
  };
  getYearDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(100), (v, i) => (
      <option key={i} value={year - i}>
        {year - i}
      </option>
    ));
  };
  // end of year dropdown box


  render() {
    this.filteredImages = [];

    this.props.images.images.map((images, i) => {
      console.log("images =" + this.props.images.images[i].data[0].date_created);
      console.log(
        "image year" + this.props.images.images[i].data[0].date_created.substring(0, 4)
      );
      if (
        this.props.images.images[i].data[0].date_created.substring(0, 4) >=
          this.state.sYear &&
        this.props.images.images[i].data[0].date_created.substring(0, 4) <=
          this.state.eYear
      ) {
        console.log("added");
        this.filteredImages.push(this.props.images.images[i]);
      }
      return 1;
    });
    console.log("filteredImages =" + this.filteredImages);
    return (
      <div className="images">
        <div>
          <SearchArea
            searchImage={this.searchImage}
            handleChange={this.handleChange}
            handleMedia={this.handleMedia}
          />
        </div>

        <div className="yearpicker" z-index="1" position="absolute">
          <div className="row justify-content-md-center" z-index="1" position="absolute">
            <span> Filter by Year </span>

            <span> From: </span>

            <YearPicker onChange={this.handleYear1} />
            <span> To: </span>
            <YearPicker onChange={this.handleYear2} />
          </div>
        </div>

        <div className="list card-columns">
          {this.filteredImages.map((filteredImages, index) => {
            var imageDisplay = 0;
            if(this.filteredImages[index].data[0].media_type==='audio'){
                imageDisplay =audioImage;
            }else{
                imageDisplay = this.filteredImages[index].links[0].href;
            }
            return (
              <div key={index}>
                <div className="card imghov">
                  <Link to={"/nasa_image_search/" + this.filteredImages[index].data[0].nasa_id}>
                    <img src={imageDisplay} className=" img-fluid" alt="" />
                  </Link>
                  <div class="card-body">
                    <san class="font-weight-bold">Title: </san>
                    <san>{this.filteredImages[index].data[0].title}</san>
                    <br />
                    <san class="font-weight-bold">Media Type: </san>
                    <san>
                      {this.filteredImages[index].data[0].media_type}
                      <br />
                    </san>
                    <san class="font-weight-bold">NASA ID: </san>
                    <san>{this.filteredImages[index].data[0].nasa_id}</san>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images : state.images
})

export default connect(
  mapStateToProps,
  { mediaAllSearch }
)(Images);

/*test*/
/*export default Images;*/
