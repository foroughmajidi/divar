import React from 'react'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components'

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;

`

function AdvertisementList() {
  return (
    <Search>
      <SearchBar />
    </Search>
  )
}

export default AdvertisementList
