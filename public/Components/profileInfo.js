import React from 'react'
var axios = require('axios');
 
// shows ProfileInfo
const ProfileInfo = React.createClass({
  render() {
    return (
      <div>
        <p>PROFILE INFO COMPONENT SHOWING</p>
        <p>{user}</p>
       
      </div>
    )
  }
})

export default ProfileInfo