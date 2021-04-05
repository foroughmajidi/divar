import React from 'react'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import Button from '@material-ui/core/Button'
function SideBar(props) {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  )
}

export default SideBar
