import Wrap from './pages/wrap';

import './assets/styles/main.scss'

import {useState} from 'react'
import Sidebar from './containers/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from 'react-router-dom';

import {
  Home,
  Discount,
  Dashboard,
  Setting,
  Error
} from './pages';

function  App () {
  const [sidebarState, setSidebarState]= useState(window.location.pathname);
  return(
    <>
    <div className="container">
    <Router>
      {/* <Wrap/> */}
      <div className="wrapper">
      <div className="side">
      <Sidebar sidebarState= {sidebarState} setSidebarState={setSidebarState}/> 
      </div>
       <div className="ree">
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route  path ="/discount" component={Discount}/>
         <Route  path ="/dashboard" component={Dashboard}/>
         <Route  path ="/setting" component={Setting}/>
         <Route  path ="*" component={Error}/>
       </Switch>
       </div>
      </div>
     </Router>
    </div>
    </>
  )
}

export default App;