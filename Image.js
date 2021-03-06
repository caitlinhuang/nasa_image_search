/*
FileName: Image.js
Author: Caitlin Huang
Description:  This program displays the detailed information of the selected NASA media.  
It also allows user to view or play the media.
*/

import React, { Component } from "react";
import { connect } from 'react-redux';
import mediaSearch  from '../actions/mediaAssetSearchAction'; 
import mediaDetailSearch from '../actions/mediaDetailSearchAction'; 
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import '../css/socialShare.css';


class Image extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          playing: false
        };
    
        this.mediaURL = '';
        this.title = '';
        this.center = '';
        this.description = '';
        this.media_type = '';
        this.nasa_id = ''
        this.shareURL = '';

    }

    
    componentDidMount() {
        let id = this.props.match.params.nasa_id;
        this.props.mediaSearch(id);
        this.props.mediaDetailSearch(id);
    }  

 
    render(){
        this.nasa_id = this.props.match.params.nasa_id;
        if(this.props.imageDetail.imageDetail !== null &&
            this.props.imageDetail.imageDetail !== undefined){
             console.log("imageDetail"+this.props.imageDetail.imageDetail);
             this.props.imageDetail.imageDetail.map((imageDetail, index) => {
                this.title = this.props.imageDetail.imageDetail[index].data[0].title;
                this.center = this.props.imageDetail.imageDetail[index].data[0].center;
                this.description = this.props.imageDetail.imageDetail[index].data[0].description; 
                this.media_type = this.props.imageDetail.imageDetail[index].data[0].media_type; 
                return 1
             })
             
        }
        if(this.props.imageURL.image !== null && 
            this.props.imageURL.image !== undefined ){
            this.props.imageURL.image.map((image, index) => {
                if (
                    this.props.imageURL.image[index].href.indexOf("orig.mp4") !== -1 ||
                    this.props.imageURL.image[index].href.indexOf("orig.ogv") !== -1 ||
                    this.props.imageURL.image[index].href.indexOf("orig.webm") !== -1 ||
                    this.props.imageURL.image[index].href.indexOf("orig.hls") !== -1
                ) {
                  this.shareURL = this.props.imageURL.image[index].href;
                  return (this.mediaURL = (
                    <div className="player-wrapper">
                      <ReactPlayer
                        url={this.props.imageURL.image[index].href}
                        className="react-player img-fluid"
                        playing={this.state.playing}
                        width="100%"
                        height="100%"
                        onPlay={() => this.setState({ playing: true })}
                        onPause={() => this.setState({ playing: false })}
                      />
        
                      <button
                        btn
                        btn-outline-secondary
                        onClick={() => this.setState({ playing: true })}
                      >
                        Play
                      </button>
                      <button
                        btn
                        btn-outline-secondary
                        onClick={() => this.setState({ playing: false })}
                      >
                        Pause
                      </button>
                    </div>
                  ));
                } else if (
                    this.props.imageURL.image[index].href.indexOf("orig.wa") !== -1 ||
                    this.props.imageURL.image[index].href.indexOf("orig.mp3") !== -1
                ){
                  this.shareURL = this.props.imageURL.image[index].href;  
                  return this.mediaURL = <ReactAudioPlayer src={this.props.imageURL.image[index].href} controls/>;
                }else if(
                  this.props.imageURL.image[index].href.indexOf("orig.jp") !== -1 ||
                  this.props.imageURL.image[index].href.indexOf("orig.png") !== -1
                ){
                  this.shareURL = this.props.imageURL.image[index].href; 
                  return this.mediaURL = <img src={this.props.imageURL.image[index].href} alt = 'NASA' className="img-fluid"/>;
                }
            }
            ); 
        }else{
            return this.mediaURL = <div className="center">Loading media...</div>
        }

        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.shareURL}`;
        const twitterUrl = `https://twitter.com/home?status=${this.shareURL}`;
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${this.shareURL}`;
        const tumblrUrl = `https://www.tumblr.com/new/link=${this.shareURL}`;

        let socialShare = (
          <div className="socialShareButton row align-items-center">
           <h6 class="font-weight-bold">Share this media:&nbsp;&nbsp;</h6>
            <a className="share-facebook" href={facebookUrl} target="_blank">
              <i className="fa fa-facebook-square d-flex justify-content-end" />
            </a>
            <a href={linkedinUrl} target="_blank">
              <i
                className="fa fa-linkedin-square d-flex justify-content-end ml-1"
                style={{ color: "#5592f4" }}
              />
            </a>
            <a href={twitterUrl} target="_blank">
              <i
                className="fa fa-twitter-square d-flex justify-content-end ml-1"
                style={{ color: "#555cf4" }}
              />
            </a>
            <a href= {tumblrUrl} target = "blank">
              <i
                className = "fa fa-tumblr-square d-flex justify-content-end"
                style={{color: "#555cf4"}}
              />
            </a>
          </div>
        );
      
        return (
          <div className="container imageDetail">
            <br />
            <br />
            <h3 className="text-center">{this.title}</h3>
            <div className="row">
              <div classNmae="col">
              <br></br>
                <div className="card border-0" style={{ width: "40rem" }}>
                  <div className="card-img-top">{this.mediaURL}
                  </div>
                  <div className="card-body center">{socialShare}</div>
                </div>
              </div>
              <div classNmae="col">
                <div className="card border-0" style={{ width: "30rem" }}>
                  <div className="card-body">
                
                    <p cardName="card-text">
                      {" "}
                      <span class="font-weight-bold">Description: </span>{" "}
                      {this.description}{" "}
                    </p>
                    <p cardName="card-text">
                      {" "}
                      <span class="font-weight-bold"> Center: </span>
                      {this.center}{" "}
                    </p>
                    <p cardName="card-text">
                      {" "}
                      <span class="font-weight-bold"> NASA ID: </span>
                      {this.nasa_id}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    
    const mapStateToProps = state => ({
      imageURL: state.image,
      imageDetail: state.imageDetail
    });
    
    export default connect(
      mapStateToProps,
      { mediaSearch, mediaDetailSearch }
    )(Image);
    
    /*export default connect(mapStateToProps, mapDispatchToProps)(Image)*/