import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return(
    <div>
      <Child doYourThing={props.changeTheWorld} title={props.title}/>
      <Child doYourThing={props.doSomethingElse} title={props.title}/>
    </div>
  )
}

export default Parent
