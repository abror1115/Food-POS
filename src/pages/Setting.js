import {useState} from 'react'
import Set from '../containers/Set/Set';
import Settings from '../containers/settings/settings'

import './pages.scss';

const Setting = () => {
    const [activeState, setActiveState]= useState('/')
    return(
        <>
        <div className="wrap-set">
            <h1>Settings</h1>
           <div className ='wrap-inner'>
           <div className="wrap-left">
                <Set/>
            </div>

            <div className="wrap-right">
                <div className="top">
                    <h2>Products Management</h2>
                    <button>Manage Categories</button>
                </div>

                <div className="middle">
                    <div  className={` link ${activeState == '/' ? 'active' : ''}`} onClick ={ () =>setActiveState('/')}>
                        <button>Hot Dishes</button>
                    </div>
                    <div className={` link ${activeState == '1' ? 'active' : ''}`} onClick ={ () =>setActiveState('1')}>
                        <button>Cold Dishes</button>
                    </div>
                    <div className={` link ${activeState == '2' ? 'active' : ''}`} onClick ={ () =>setActiveState('2')}>
                        <button>Soup</button>
                    </div>
                    <div className={` link ${activeState == '3' ? 'active' : ''}`} onClick ={ () =>setActiveState('3')}>
                        <button>Grill</button>
                    </div>
                    <div className={` link ${activeState == '4' ? 'active' : ''}`} onClick ={ () =>setActiveState('4')}>
                        <button>Appetizer</button>
                    </div>
                    <div className={` link ${activeState == '5' ? 'active' : ''}`} onClick ={ () =>setActiveState('5')}>
                        <button>Dessert</button>
                    </div>
                </div>

                <div className="bottom">
                    <div className="item-box">
                        <Settings/>
                    </div>
                    <div className="btn-set">
                        <button className="discard">Discard Changes</button>
                        <button className="save">Save Changes</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}

export default Setting;