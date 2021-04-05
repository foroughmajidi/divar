import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import { ReactComponent as location } from '../assets/img/location.svg'
import Cities from './Cities'

const MainNavbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  position:fixed;
  top:0;
  width:100%;
  background-color:#fff;
  z-index: 99999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .logo {
    height: 60px;
  }
`
const RightSide = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  .logo {
    height: 60px;
  }
`
const LocationIcon = styled(location)`
  width: 20px;
  margin-left: 10px;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  .logo {
    height: 60px;
  }
  .linkTopNav {
    align-self: center;
    box-shadow: none;
    border: none;
    padding: 0.78571429em 0.92857143em;
    margin: 0 0.35714286em;
    transition: color 0.1s ease;
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }
`
const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  background-color: #a62626;
  position: relative;
  height: 2.5rem;
  padding: 0 16px;
  border-radius: 4px;
  min-width: 6rem;
  font-size: 1rem;
`
const ButtonCity = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  flex-direction: row-reverse;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.56);
  position: relative;
  height: 2.5rem;
  padding: 0 16px;
  border-radius: 4px;
  min-width: 6rem;
  font-size: 1rem;
`
const Navbar = () => {
  const handleClick = () => {}
  return (
    <MainNavbar position='fix'>
      <RightSide>
        <img className='logo' src={logo} />
        <ButtonCity onClick={handleClick}>
          <Cities />
        </ButtonCity>
      </RightSide>
      <LeftSide>
        <Link className='linkTopNav' to='/mydivar'>
          دیوار من
        </Link>
        <Link className='linkTopNav' to='/chat'>
          چت
        </Link>
        <Link className='linkTopNav' to='/aboutdivar'>
          درباره دیوار
        </Link>
        <Link className='linkTopNav' to='/blog'>
          بلاگ
        </Link>
        <Link className='linkTopNav' to='/people'>
          پشتیبانی
        </Link>
        <Button>ثبت آگهی</Button>
      </LeftSide>
    </MainNavbar>
  )
}

export default Navbar
