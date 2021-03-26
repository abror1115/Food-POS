import {useState} from 'react';
import './Header.scss';
// import {useState, useEffect} from 'react';


const Header = ({}) => {
    const [activeState, setActiveState]= useState('/');

    return(
         <div className=''>
             <div className="wrap">
                 <div className="wrap-inner">

                     <div className="wrap-inner-middle">

                     </div>

                     <div className="wrap-inner-right">

                     </div>

                 </div>
             </div>
            <div className="header">
           
               <div className="header-Top">
               <div className="header-left">
                    <h2 className='resto'>Jaegar Resto</h2>
                    <h4 className='res-data'>Tuesday, 2 Feb 2021</h4>
                </div>


                <form className="header-Top-form">
                    <input type="text" className="header-input" placeholder="Search for food, coffe, etc.."   />
                </form>
               </div>
                <div className="header-links">
                     <button className ={`header-link ${activeState=='/' ? 'active' : ''}`} onClick={()=> setActiveState('/')}>Hot Dishes</button>
                    <button className ={`header-link ${activeState=='4' ? 'active' : ''}`} onClick={()=> setActiveState('4')}>Cold Dishes</button>
                     <button  className ={`header-link ${activeState=='Soup' ? 'active' : ''}`} onClick={()=> setActiveState('Soup')}>Soup</button>
                    <button  className ={`header-link ${activeState=='Grill' ? 'active' : ''}`} onClick={()=> setActiveState('Grill')}>Grill</button>
                     <button  className ={`header-link ${activeState=='Appetizer' ? 'active' : ''}`} onClick={()=> setActiveState('Appetizer')}>Appetizer</button>
                    <button  className ={`header-link ${activeState=='Dessert' ? 'active' : ''}`} onClick={()=> setActiveState('Dessert')}>Dessert</button>
                </div>
           </div>

        </div>
    )
}

export default Header;