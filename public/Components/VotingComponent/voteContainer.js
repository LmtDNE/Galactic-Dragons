import React, { Component } from 'react'
import VoteVideoPlayer from './votingPlayer'
import VoteVideoList from './votingVideoList'
import Rating from './rating'
var axios = require('axios');



// this is the parent component 
class VoteContainer extends Component {

  constructor (props) {
    super (props) 

    let movieSelected = localStorage.getItem('viewerMovie')
    console.log('this is movieSelected:', movieSelected)
    if (movieSelected === '{}') {
      this.state = {
        videoUrl: null
      }
    } else {
      movieSelected = JSON.parse(movieSelected);
      this.state = {
        videoUrl: movieSelected.video,
        videoImage: movieSelected.image,
        videoTitle: movieSelected.title,
        videoSynopsis: movieSelected.synopsos,
        videoActors: movieSelected.actors,
        videoDirector: movieSelected.director,
        videoYear: movieSelected.year
      }
    }
  }
 
  render() {

    if (this.state.url === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <VoteVideoPlayer movie= {this.state.videoUrl} />
        <VoteVideoList movie={ this.state} />
        <section id="star-rating" style={{visibility: "hidden"}}>
          <Rating  />
        </section>
      </section>
    );
  }
}

export default VoteContainer