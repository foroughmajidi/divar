import MainPage from './sections/MainPage'
import Category from './sections/Category'
import React, { useContext } from 'react'
import Chat from './sections/Chat'

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
  Redirect,
} from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/:city/:type" children={<Category  />}/>
          <Route path="/:city" children={<MainPage />}/>
          <Route exact path='/' render={() => <Redirect to='/tehran' />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
