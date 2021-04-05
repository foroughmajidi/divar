import React, { useContext, useEffect } from 'react'
import NavbarList from './NavbarList'
import { DivarContext } from '../ApiData'
import AdvertisementList from './AdvertisementList'
import styled from 'styled-components'
import WidgetList from '../components/WidgetList'
import Button from '../components/Button'
import SideBarList from '../components/SideBarList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  useParams
} from "react-router-dom";
const TopToBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`
const MidPage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 100px;
  .one {
    flex: 1;
  }
  .two {
    flex: 4;
  }
  width:100%
  
`
const SearchPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ListButtom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
function Category(props) {
  const { data, setPath, setPage, setListItems } = useContext(DivarContext)

  // const [open, setOpen] = React.useState(false)
  // const setCategory = (slug) => {
  //   setPath(+'/' + slug + '/' + slug + '/' + slug)
  //   setListItems([])
  //   setPage(1)
  //   setOpen(false)
  // }
  

  let { type } = useParams();
  console.log("sasa",type)
  useEffect(() => {
    setPath(type)
  }, [type])
  return (
    <div className='container'>
      <TopToBottom>
        <NavbarList />
        <MidPage>
          <SideBarList className='one' />
          <SearchPart className='two'>
            <AdvertisementList />
            <ListButtom>
              {data.suggestion_list?.map((user, index) => {
                return <Button key={index} text={user.displayed_text}></Button>
              })}
            </ListButtom>

            <WidgetList />
          </SearchPart>
        </MidPage>
      </TopToBottom>
    </div>
  )
}

export default Category
