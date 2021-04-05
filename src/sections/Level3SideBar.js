import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DivarContext } from '../ApiData'
import styled from 'styled-components'

const ListText = styled.div`
  margin-right: 10px;
`
const Main = styled.div`
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  direction:rtl;
  margin-right:20px;
  border-right:1px solid rgba(0,0,0,0.4);
`

const ListItem = styled.div`
  font-size:12px;
  margin:5px 0;
  color:black;
`
function Level3SideBar(props) {
  const { city, levelCheck } = useContext(DivarContext)
  console.log(levelCheck)

  return (
    <Main>
      {props.items.map((temp, index) => {
        return (
          <div>
            <Link key={index} to={`/${city.en}/${temp.slug}`}>
              <ListItem key={temp.name}>
                <ListText>{temp.name}</ListText>
              </ListItem>
            </Link>
          </div>
        )
      })}
    </Main>
  )
}

export default Level3SideBar
