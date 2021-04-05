import React, { useRef, useState, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined'
import { allCategories } from '../data/SubMenu-data'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import styled from 'styled-components'
const BigMain = styled.div`
  display: flex;
  flex-direction: column;
  .input {
    flex: 1;
    outline: none;
    direction: rtl;
    border: 1px solid #bdbdbd;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #bdbdbd;
      font-size: 16px;
    }
  }
  width: 800px;
`
const RowOne = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
`
const MenuItem = styled.div`
  font-size: 17px;
  padding: 4px;
  font-family:"IranSans";

`

const ListItem = styled.div`
  font-size: 13px;
  padding: 4px;
  color:grey;
  padding-right:10px;
`

const HeaderList = styled.div`
  font-size: 14px;
  padding: 4px;
`
const MenuItemCat = styled.div`
  font-size: 12px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const ListMenu = styled.div`
  position: absolute;
  right: 0;
  width: 151px;
  z-index: 5555;
  direction: rtl;

  background-color: #fafafa;
  box-shadow: -0.5px 0 0 0 #ededed;
  border-radius: 0 3px 3px 0;
`
const BigButton = styled.div`
.p{
  font-family:"IranSans";
  margin-right:5px;
}
  background-color: #ededed;
  width: 150px;
  line-height: 18px;
  font-size: 0.9625rem;
  border-radius: 0 3px 3px 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  z-index: 1;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  outline: none;
  justify-content: space-between;
  .btnOpen {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: #000;
    border: none;
    background: #ededed;
    border-radius: 0 5px 5px 0;
    width: 140px;
    justify-content: space-between;
    &:hover {
      background: none;
    }
  }
`
const ListShow = styled.div`
  display: flex;
  flex-direction: row;

  .detail {
    width: 100%;
    right: 0;
    position: absolute;
    text-align: right;
    background: #fff;
    height: auto;
    min-height: 520px;
    z-index: 2;
  box-shadow:0 0 4px grey;
  }
  .middle {
    right: 175px;
    position: absolute;
  }
  .middleSubCat {
    display: flex;
    flex-wrap: wrap;

    flex-direction: row-reverse;
  }
`
export default function MegaMenu() {
  const [show, setShow] = useState(false)
  const [category, setCat] = useState(false)
  const dropdownBtnRef = useRef('')

  function openList() {
    setShow(!show)
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <BigMain ref={wrapperRef}>
      <RowOne>
        <BigButton ref={dropdownBtnRef} className='btnOpen' onClick={openList}>
          <p>همه آگهی ها</p> <ArrowDropDownOutlinedIcon />
        </BigButton>
        <input className='input' placeholder='جستجو در همه آگهی ها'></input>
      </RowOne>
      <RowOne>
        <div>
          {show ? (
            <ListShow>
              <ListMenu>
                <MenuItem onMouseEnter={()=>{setCat(false)}} >
                  همه ی آگهی ها
                </MenuItem>
                {allCategories.children.map((categoryItem) => (
                  <MenuItemCat
                    onMouseEnter={() => {
                      setCat(categoryItem)
                      console.log(categoryItem)
                    }}
                  >
                    <div>{categoryItem.name}</div>
                    <ArrowBackIosOutlinedIcon
                      style={{ fontSize: '13px', margin: '10px' }}
                    />
                  </MenuItemCat>
                ))}
              </ListMenu>
                  {category ? (
              <div className='detail'>
                <div className='middle'>
                    <div className='middleSubCat'>
                      {category.children.map((item, index) => {
                        return (
                          <div key={index}>
                            <HeaderList>{item.name}</HeaderList>
                            {item.children
                              ? item.children.map((listItem) => {
                                  return <ListItem>{listItem.name}</ListItem>
                                })
                              : null}
                          </div>
                        )
                      })}
                    </div>
                </div>
              </div>
                  ) : null}
            </ListShow>
          ) : null}
        </div>
      </RowOne>
    </BigMain>
  )
}
