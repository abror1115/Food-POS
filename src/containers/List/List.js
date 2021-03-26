import ListItem from "../../components/ListItem/ListItem";

import Img1 from "../../assets/images/1.png";
import Img2 from "../../assets/images/2.png";
import Img3 from "../../assets/images/3.png";
import Img4 from "../../assets/images/4.png";
import Img5 from "../../assets/images/5.png";
import Img6 from "../../assets/images/6.png";


import "./main.scss";

const List = () => {  
    const customerArr= [
        {
                img:Img1,
                text:'Spicy seasoned seafood noodles',
                price:'$ 2.29',
                text1:'20 Bowls available',
        },
        {
                img:Img2,
                text:'Salted Pasta with mushroom sauce',
                price:'$ 2.69',
                text1:'11 Bowls available',
        },
        {
                img:Img3,
                text:'Beef dumpling in hot and sour soup',
                price:'$ 2.99',
                text1:'16 Bowls available',
        },
        {
                img:Img4,
                text:'Healthy noodle with spinach leaf',
                price:'$ 3.29',
                text1:'22 Bowls available',
        },
        {
                img:Img5,
                text:'Hot spicy fried rice with omelet',
                price:'$ 3.49',
                text1:'13 Bowls available',
        },
        
        {
                img:Img6,
                text:'Spicy instant noodle with special omelette',
                price:'$ 3.59',
                text1:'17 Bowls available',
        },
        {
                img:Img4,
                text:'Healthy noodle with spinach leaf',
                price:'$ 3.29',
                text1:'22 Bowls available',
        },
        {
                img:Img5,
                text:'Hot spicy fried rice with omelet',
                price:'$ 3.49',
                text1:'13 Bowls available',
        },
        
        {
                img:Img6,
                text:'Spicy instant noodle with special omelette',
                price:'$ 3.59',
                text1:'17 Bowls available',
        },
        {
                img:Img1,
                text:'Spicy seasoned seafood noodles',
                price:'$ 2.29',
                text1:'20 Bowls available',
        },
        {
                img:Img2,
                text:'Salted Pasta with mushroom sauce',
                price:'$ 2.69',
                text1:'11 Bowls available',
        },
        {
                img:Img3,
                text:'Beef dumpling in hot and sour soup',
                price:'$ 2.99',
                text1:'16 Bowls available',
        },
        {
                img:Img4,
                text:'Healthy noodle with spinach leaf',
                price:'$ 3.29',
                text1:'22 Bowls available',
        },
        {
                img:Img5,
                text:'Hot spicy fried rice with omelet',
                price:'$ 3.49',
                text1:'13 Bowls available',
        },
        
        {
                img:Img6,
                text:'Spicy instant noodle with special omelette',
                price:'$ 3.59',
                text1:'17 Bowls available',
        },
        {
                img:Img4,
                text:'Healthy noodle with spinach leaf',
                price:'$ 3.29',
                text1:'22 Bowls available',
        },
        {
                img:Img5,
                text:'Hot spicy fried rice with omelet',
                price:'$ 3.49',
                text1:'13 Bowls available',
        },
        
        {
                img:Img6,
                text:'Spicy instant noodle with special omelette',
                price:'$ 3.59',
                text1:'17 Bowls available',
        },
       
    ]
    return(
        <div className = 'ticket-list'>
            {customerArr.map(item =>(
                 <ListItem
                    Img={item.img}
                    text={item.text}
                    price={item.price}
                    text1={item.text1}
                     
                 />
            ))}
        </div>
    )
};

export default List;