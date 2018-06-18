import React from 'react'

const Child = (props) => {
  return(
    <div>
      <button onClick={props.doYourThing}>{props.title}</button>
    </div>
  )
}

export default Child
