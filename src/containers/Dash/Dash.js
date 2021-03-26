import DashItem from "../../components/DashItem/DashItem";

import Img1 from "../../assets/images/icons/1.svg";
import Img2 from "../../assets/images/icons/2.svg";
import Img3 from "../../assets/images/icons/3.svg";
import Img4 from "../../assets/images/icons/1_2.svg";
import Img5 from "../../assets/images/icons/2_2.svg";
// import Img6 from "../../assets/images/6.png";


import "./Dash.scss";

const Dash = () => {  
    const customerArr= [
        {
                img:Img1,
                text:'$10,243.00',
                price:'Total Revenue',
                pros :'+32.40%',
                img2:Img4
        },
        {
                img:Img2,
                text:'23,456',
                price:'Total Dish Ordered',
                pros :'-12.40%',
                img2:Img5
        },
        {
                img:Img3,
                text:'1,234',
                price:'Total Customer',
                pros :'+2.40%',
                img2:Img4
        },
    ]
    return(
        <div className = 'dash-list'>
            {customerArr.map(item =>(
                 <DashItem
                    Img={item.img}
                    text={item.text}
                    price={item.price}
                    pros={item.pros}
                    Img2 ={item.img2}
                 />
            ))}
        </div>
    )
};

export default Dash;