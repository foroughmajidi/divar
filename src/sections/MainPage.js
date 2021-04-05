import React, { useContext, useEffect } from 'react'
import NavbarList from './NavbarList'
import { DivarContext } from '../ApiData'
import AdvertisementList from './AdvertisementList'
import styled from 'styled-components'
import WidgetList from '../components/WidgetList'
import Button from '../components/Button'
import SideBarList from '../components/SideBarList';
import { cities } from "../data/Data";

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
  width:100%
`
const MidPage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 70px;
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
function App(props) {
  const { data,setCity } = useContext(DivarContext);
  let { city } = useParams();

useEffect(()=>{
  let name={}
  for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    if (city == element.en) {
      name = element;
    }
  }
console.log("SDSSD",name)
setCity({en:name.en,fa:name.fa})
},[city])

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

export default App
