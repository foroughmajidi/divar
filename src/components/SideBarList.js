import React, { useContext, useState } from 'react'
import { allCategories } from '../data/SubMenu-data'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DivarContext } from '../ApiData'
import Level2SideBar from '../sections/Level2SideBar'
import AllAdsButton from '../sections/AllAdsButton'

const Main = styled.div`
  display: block;
  width: 280px;
  // position: absolute;
  // margin-bottom: 21.875rem;
  // right:0;
  background: #fff;
  .header {
    text-align: right;
    margin-right: 20px;
    font-weight: bold;
  }
  flex: 1;
  a {
    text-decoration: none !important;
    color: rgba(0, 0, 0, 0.8);
  }
`
const ListItem = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding: 9px 0;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.56);
  font-size:15px;
  align-items:center;
`
const ListText = styled.div`
  margin-right: 10px;
`

function SideBarList() {
  const { path, city, levelCheck } = useContext(DivarContext)
  const [item, setItem] = useState(false)
  const handleItem = (temp) => {
    levelCheck.level1 = temp
    levelCheck.level2 = ''
    levelCheck.level3 = ''
  }
  console.log(levelCheck)
  return (
    <Main>
      <div className='header'>دسته بندی ها</div>
      {allCategories.children.map((temp, index) => {
        if (temp.slug === levelCheck.level1) {
          return (
            <div>
              <Link key={index} to={`/${city.en}/${temp.slug}`}>
                <ListItem key={temp.name} onClick={() => handleItem(temp.slug)}>
                  <div>{temp.icon()}</div>
                  <ListText>{temp.name}</ListText>
                  <ListItemIcon>{temp.children.icon}</ListItemIcon>
                </ListItem>
              </Link>
              {levelCheck.level1 === temp.slug && (
                <Level2SideBar items={temp.children} />
              )}
            </div>
          )
        }
        if (!levelCheck.level1) {
          return (
            <div>
              <Link key={index} to={`/${city.en}/${temp.slug}`}>
                <ListItem key={temp.name} onClick={() => handleItem(temp.slug)}>
                  <div>{temp.icon()}</div>
                  <ListText>{temp.name}</ListText>
                  <ListItemIcon>{temp.children.icon}</ListItemIcon>
                </ListItem>
              </Link>
              {levelCheck.level1 === temp.slug && (
                <Level2SideBar items={temp.children} />
              )}
            </div>
          )
        }
      })}
    </Main>
  )
}

export default SideBarList
