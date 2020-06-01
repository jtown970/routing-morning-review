import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
  return(
    <div>
      <h2> Nice to meet me</h2>
      <Link to='/'> {`< back to the conference room`}</Link>
    </div>
  )
}