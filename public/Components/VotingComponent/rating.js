import React from 'react';
import ReactStars from 'react-stars'
import { hashHistory } from 'react-router'
var axios = require('axios');
 
class Rating extends React.Component {
  constructor() {
      super();
      let movieSelected = localStorage.getItem('viewerMovie')
      console.log('this is movieSelected:', movieSelected)
      movieSelected = JSON.parse(movieSelected);
      let user = localStorage.getItem('user')
      user = JSON.parse(user);

      this.state = {
          rating: 1, 
          title: movieSelected.title, 
          voter: user.userName
      };
      // console.log('movieSelected', movieSelected)
      this.ratingChanged = this.ratingChanged.bind(this);
  }
  ratingChanged(vote) {
      this.setState({rating: vote}, function(){  
      alert("This will be your only opportunity to vote");
      
      hashHistory.push("profile");
      // console.log("What is this.state.rating", this.state.rating);
      // console.log('movieSelected', this.movieSelected)
      
    });
    axios.post('/movies/rating', { rating: this.state.rating, title: this.state.title, voter: this.state.voter })
    .then(function(res){
      // console.log('res', res)
    })

  }


  render() {
    const { rating } = this.state;
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <ReactStars
          count={5}
          onChange={vote=>this.ratingChanged(vote)}
          size={24} 
          color2={'#ffd700'} />
      </div>
    );
  }
}
export default Rating
