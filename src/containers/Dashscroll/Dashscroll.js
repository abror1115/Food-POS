import DashscrollItem from "../../components/DashscrollItem/DashscrollItem";

import ownerImg1 from "../../assets/images/person.png";
import ownerImg2 from "../../assets/images/person2.png";
import ownerImg3 from "../../assets/images/person3.png";
import ownerImg4 from "../../assets/images/person4.png";
import ownerImg5 from "../../assets/images/person5.png";

import "./Dashscroll.scss";

const Dashscroll = () => {  
    const customerArr= [
        {
                imgLink:ownerImg1,
                name:'Eren Jaegar',
                stat:'Spicy seasoned seafood noodles ',
                price:'$125',
                status:'Completed',
        },
        {
                imgLink:ownerImg2,
                name:'Reiner Braunn',
                stat:'Salted Pasta with mushroom sauce ',
                price:'$145',
                status:'Preparing',
        },
        {
                imgLink:ownerImg3,
                name:'Levi Ackerman',
                stat:'Beef dumpling in hot and sour soup',
                price:'$105',
                status:'Pending',
        },
        {
                imgLink:ownerImg4,
                name:'Historia Reiss',
                stat:'Hot spicy fried rice with omelet',
                price:'$45',
                status:'Completed',
        },
        {
                imgLink:ownerImg5,
                name:'Hanji Zoe',
                stat:'Hot spicy fried rice with omelet',
                price:'$245',
                status:'Completed',
        },
        
        {
                imgLink:ownerImg1,
                name:'Eren Jaegar',
                stat:'Spicy seasoned seafood noodles ',
                price:'$125',
                status:'Completed',
        },
        {
                imgLink:ownerImg2,
                name:'Reiner Braunn',
                stat:'Salted Pasta with mushroom sauce ',
                price:'$145',
                status:'Preparing',
        },
        {
                imgLink:ownerImg3,
                name:'Levi Ackerman',
                stat:'Beef dumpling in hot and sour soup',
                price:'$105',
                status:'Pending',
        },
        {
                imgLink:ownerImg4,
                name:'Historia Reiss',
                stat:'Hot spicy fried rice with omelet',
                price:'$45',
                status:'Completed',
        },
        {
                imgLink:ownerImg5,
                name:'Hanji Zoe',
                stat:'Hot spicy fried rice with omelet',
                price:'$245',
                status:'Completed',
        },
        
    ]
    return(
        <div className = 'dash-list2'>
            {customerArr.map(item =>(
                 <DashscrollItem
                    ownerImg={item.imgLink}
                    name={item.name}
                    stat={item.stat}
                    price={item.price}
                    status={item.status} 
                 />
            ))}
        </div>
    )
};

export default Dashscroll;