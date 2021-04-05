import { KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'
import SideBarList from '../components/SideBarList'

function AllAdsButton() {
  const handleSideBar = () => {
    return <SideBarList />
  }
  return (
    <div>
      <Button
        variant='contained'
        disabled
        color='secondary'
        className={classes.button}
        startIcon={<KeyboardArrowRight />}
        onClick={handleSideBar}
      >
        همه آگهی ها
      </Button>
    </div>
  )
}

export default AllAdsButton
