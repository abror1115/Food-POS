import Sidebar from '../../containers/Sidebar/Sidebar'
import {Link} from 'react-router-dom'

import './main.scss'

const SidebarBtn = ({icon, sidebarState}) => {
    // console.log('wffefwv', icon)
    return (
        <>
            <div className="sidebar">
                <div className="side-wrap">
                    <div className="sidebar-inner">
                        <div className="sidebar-btn">
                           
                            <button className ='btn-icon'>{icon}</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarBtn;