import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DivarContext } from '../ApiData'
import styled from 'styled-components'
import Level3SideBar from './Level3SideBar'
import { ReactComponent as Arrow } from '../assets/img/arrow-right-solid.svg'

const ListText = styled.div`
  margin-right: 10px;
`
const ListItem = styled.div`
  font-size:14px;
  margin:5px 0;
  color:black;
  font-weight:bold;  
`
const Main = styled.div`
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  direction:rtl;
  margin-right:30px;
  .back{
    display:flex;
    align-items:center;
    color: rgba(0,0,0,.56);
    margin:10px 0;
  }
  .backIcon{
    margin-left:10px;
  }
`
function Level2SideBar(props) {
  const { city, levelCheck, setPath } = useContext(DivarContext)
  const handleItem = (temp) => {
    levelCheck.level2 = temp
  }

  return (
    <Main>
      <Link className="back" to={`/${city.en}`} onClick={() => { levelCheck.level1 = ''; setPath('') }}>
        <Arrow className="backIcon" width={15} />
        همه آگهی ها
      </Link>
      {props.items.map((temp, index) => {
        if (temp.slug === levelCheck.level2) {
          return (
            <div>
              <Link key={index} to={`/${city.en}/${temp.slug}`}>
                <ListItem key={temp.name} onClick={() => handleItem(temp.slug)}>
                  <ListText>{temp.name}</ListText>
                </ListItem>
              </Link>
              {levelCheck.level2 === temp.slug && (
                <Level3SideBar items={temp.children} />
              )}
            </div>
          )
        }
        if (!levelCheck.level2) {
          return (
            <div>
              <Link key={index} to={`/${city.en}/${temp.slug}`}>
                <ListItem key={temp.name} onClick={() => handleItem(temp.slug)}>
                  <ListText>{temp.name}</ListText>
                </ListItem>
              </Link>
            </div>
          )
        }
      })}
    </Main>
  )
}

export default Level2SideBar
