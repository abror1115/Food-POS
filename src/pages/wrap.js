import {useState} from 'react'
import Sidebar from '../containers/Sidebar';
import Home from './Home/Home'
import './wrap.scss';


const Wrap = () => {
  const [sidebarState, setSidebarState]= useState(window.location.pathname);
    return(
       <>
         <div className='wrap container'>
         <Sidebar sidebarState= {sidebarState} setSidebarState={setSidebarState}/> 
          <Home/>   
         </div>
       </>
    )
}

export default Wrap;