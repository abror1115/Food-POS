import SetItem from "../../components/SetItem/SetItem";

import Img1 from "../../assets/images/SetIcons/1.svg";
import Img2 from "../../assets/images/SetIcons/2.svg";
import Img3 from "../../assets/images/SetIcons/3.svg";
import Img4 from "../../assets/images/SetIcons/4.svg";
import Img5 from "../../assets/images/SetIcons/5.svg";
import Img6 from "../../assets/images/SetIcons/6.svg";
import Img7 from "../../assets/images/SetIcons/7.svg";





import "./Set.scss";


import {
    BxsIcon,
    HomeIcon,
    WweIcon,
    Wwe2Icon,
    MessageIcon,
    BellIcon,
    SetIcon
} from '../../assets/images/SetIcons/icons'

const Set = () => {  
    const customerArr= [
        {
                img:BxsIcon(),
                title:'Appereance',
                text:'Dark and Light mode, Font size'
        },
        {
                img:HomeIcon(),
                title:'Your Restaurant',
                text:'Dark and Light mode, Font size'
        },
        {
                img:WweIcon(),
                title:'Products Management',
                text:'Manage your product, pricing, etc'
        },
        {
                img:Wwe2Icon(),
                title:'Notifications',
                text:'Customize your notifications'
        },
        {
                img:MessageIcon(),
                title:'Security',
                text:'Configure Password, PIN, etc'
        },
        {
                img:BellIcon(),
                title:'Security',
                text:'Configure Password, PIN, etc'
        },
        {
                img:SetIcon(),
                title:'About Us',
                text:'Find out more about Posly'
        },
      
    ]
    return(
        <div className = 'Set-list'>
            {customerArr.map(item =>(
                 <SetItem
                    Img={item.img}
                    text={item.text}
                    title={item.title}
                 />
            ))}
        </div>
    )
};

export default Set;