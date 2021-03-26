import HomeRightItem from "../../components/HomeRightItem/HomeRightItem";

import Img1 from "../../assets/images/1.png";
import Img2 from "../../assets/images/2.png";
import Img3 from "../../assets/images/3.png";
import Img4 from "../../assets/images/4.png";
import Img5 from "../../assets/images/5.png";
import Img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/icons/Button.svg";
import img8 from "../../assets/images/7.png";


import "./HomeRight.scss";

let inBottom = <div className="input">
    <input type="text" placeholder='Please, just a little bit spicy only.'/>
    <img src={img7} alt="delete"/>
</div>
let inBottom2 = <div className="input">
    <input type="text" placeholder='Order Note...'/>
    <img src={img7} alt="delete"/>
</div>

const HomeRight = () => {  
    const customerArr= [
        {
                img:Img1,
                text:'Spicy seasoned sea...',
                price:'$ 2.29',
                text1:'20 Bowls available',
                count:2,
                total: '$ 4,58',
                inBtn:inBottom

        },
        {
                img:Img2,
                text:'Salted Pasta with mu...',
                price:'$ 2.69',
                text1:'11 Bowls available',
                count:1,
                total: '$ 2.69',
                inBtn:inBottom2
        },
        {
                img:Img3,
                text:'Spicy instant noodle...',
                price:'$ 3.49',
                text1:'16 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
        {
                img:img8,
                text:'Healthy noodle wit...',
                price:'$ 3.29',
                text1:'22 Bowls available',
                count:1,
                total: '$3.29',
                inBtn:inBottom
        },
        {
                img:Img5,
                text:'Hot spicy fried...',
                price:'$ 3.49',
                text1:'13 Bowls available',
                count:2,
                total: '$ 4,58',
                inBtn:inBottom
        },
        
        {
                img:Img6,
                text:'Spicy instant nood...',
                price:'$ 3.59',
                text1:'17 Bowls available',
                count:1,
                total: '$ 2.69',
                inBtn:inBottom2
        },
        {
                img:Img4,
                text:'Healthy noo...',
                price:'$ 3.29',
                text1:'22 Bowls available',
                count:2,
                total: '$ 4,58',
                inBtn:inBottom
        },
        {
                img:Img5,
                text:'Hot spicy fri...',
                price:'$ 3.49',
                text1:'13 Bowls available',
                count:1,
                total: '$ 2.69',
                inBtn:inBottom2
        },
        
        {
                img:Img6,
                text:'Spicy instant nood...',
                price:'$ 3.59',
                text1:'17 Bowls available',
                count:1,
                total: '$ 2.69',
                inBtn:inBottom
        },
        {
                img:Img1,
                text:'Spicy seasoned...',
                price:'$ 2.29',
                text1:'20 Bowls available',
                count:2,
                total: '$ 4,58',
                inBtn:inBottom2
        },
        {
                img:Img2,
                text:'Salted Past...',
                price:'$ 2.69',
                text1:'11 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom,
        },
        {
                img:Img3,
                text:'Beef dumpling in...',
                price:'$ 2.99',
                text1:'16 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
        {
                img:Img4,
                text:'Healthy noodl...',
                price:'$ 3.29',
                text1:'22 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
        {
                img:Img5,
                text:'Hot spicy frie...',
                price:'$ 3.49',
                text1:'13 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom
        },
        
        {
                img:Img6,
                text:'Spicy instan...',
                price:'$ 3.59',
                text1:'17 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
        {
                img:Img4,
                text:'Healthy noodl...',
                price:'$ 3.29',
                text1:'22 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom
        },
        {
                img:Img5,
                text:'Hot spicy fri...',
                price:'$ 3.49',
                text1:'13 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
        
        {
                img:Img6,
                text:'Spicy instant noo...',
                price:'$ 3.59',
                text1:'17 Bowls available',
                count:3,
                total: '$ 10,47',
                inBtn:inBottom2
        },
       
    ]
    return(
        <div className = 'list'>
            {customerArr.map(item =>(
                 <HomeRightItem
                    Img={item.img}
                    text={item.text}
                    price={item.price}
                    text1={item.text1}
                    count={item.count}
                    total={item.total}
                    inHome={item.inBtn}
                     
                 />
            ))}
        </div>
    )
};

export default HomeRight;