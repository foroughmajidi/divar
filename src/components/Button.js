import React from 'react'
import styled from 'styled-components'
const ButtonList = styled.button`
  display: flex;
  align-items: center;
  color: #a62626;
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid #a62626;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  margin-left: 0.75rem;
  font-size: 0.75rem;
  height: 1.75rem;
  outline: none;
  padding: 0 12px;
  &:hover {
    background-color: #a62626;
    color: #fff;
  }
  font-family:"IranSans"
`
function Button(props) {
  return <ButtonList>{props.text}</ButtonList>
}
export default Button
