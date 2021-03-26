import {Link} from 'react-router-dom';
import SidebarBtn from '../../components/sidebarBtn/sidebarBtn';

import image from '../../assets/icons/bxs.svg'

import './main.scss'


import {
    BxsIcon,
    HomeIcon,
    WweIcon,
    Wwe2Icon,
    MessageIcon,
    BellIcon,
    SetIcon,
    ExitIcon
} from '../../assets/icons/icons'


const Sidebar = ({ sidebarState, setSidebarState}) => {
    return (
        <>

            <div className="sidebar-wrap">
                 <div className='sidebar'>
                        <div className="sidebar-img">
                             <img className='img-icon' src={image} alt=""/>
                        </div>
                        <div className="wrapper-side">
                        <Link to='/' className ={`sidebar-icon ${sidebarState=='/' ? 'active' : ''}`} onClick={()=> setSidebarState('/')}>
                            <SidebarBtn icon={<HomeIcon/>}/>
                        </Link>
                        <Link to ='/discount' className ={`sidebar-icon ${sidebarState=='discount' ? 'active' : ''}`} onClick={()=> setSidebarState('discount')}>
                            <SidebarBtn icon={<WweIcon/>}/>
                        </Link>
                        <Link to ='/dashboard' className ={`sidebar-icon ${sidebarState=='dashboard' ? 'active' : ''}`} onClick={()=> setSidebarState('dashboard')}>
                            <SidebarBtn icon={<Wwe2Icon/>}/>
                        </Link>

                        <Link to ='/message' className ={`sidebar-icon ${sidebarState=='message' ? 'active' : ''}`} onClick={()=> setSidebarState('message')}>
                            <SidebarBtn icon={<MessageIcon/>}/>
                        </Link>

                        <Link to ='/bell' className ={`sidebar-icon ${sidebarState=='bell' ? 'active' : ''}`} onClick={()=> setSidebarState('bell')}>
                            <SidebarBtn icon={<BellIcon/>}/>
                        </Link>

                        <Link to ='/setting' className ={`sidebar-icon ${sidebarState=='setting' ? 'active' : ''}`} onClick={()=> setSidebarState('setting')}>
                            <SidebarBtn icon={<SetIcon/>}/>
                        </Link>

                        <Link to ='/exit' className ={`sidebar-icon ${sidebarState=='exit' ? 'active' : ''}`} onClick={()=> setSidebarState('exit')}>
                            <SidebarBtn icon={<ExitIcon/>}/>
                        </Link>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Sidebar;
