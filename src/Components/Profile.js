import React from 'react'
import PropTypes from "prop-types"

function Profile(props) {
  return (
    <div style={{color:"green" }}>
    <h1>{props.fullname}</h1>
    <h1>{props.bio}</h1>
    <h1>{props.profession}</h1>
    <button onClick={props.handleName}>Alert</button>
    </div>
  )
}
// proptypes:
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profile