import Dash from '../containers/Dash/Dash';

import Dashscroll from '../containers/Dashscroll/Dashscroll';
// import ApexChart from '../components/chart/ApexChart'
import Images from '../assets/images/Circle.svg'

import './pages.scss';

import Image1 from '../assets/images/1.png';
import Image2 from '../assets/images/2.png';
import Image3 from '../assets/images/3.png';






const Dashboard = () =>{
return(
<div className='dash-wrap'>
    <div className="section3">
        <div className="header">
            <h1 className="dash">
                Dashboard
            </h1>
            <h3>Tuesday 2 Feb, 2021</h3>
        </div>

        <div className="section1">
            <div className="section1-item">
                <Dash />.
            </div>
        </div>

        <div className="section2">
            <div className="section2-top">
                <div className="top-in">
                    <h2>Order Report</h2>
                    <button>Filter Order</button>
                </div>

                <div className="top-bot">
                    <h3 className="title1">Customer</h3>
                    <h3 className="title2">Menu</h3>
                    <h3 className="title3">Total Payment</h3>
                    <h3 className="title4">Status</h3>
                </div>
            </div>

            <div className="section2-bottom">
                <Dashscroll />
            </div>
        </div>
    </div>

    <div className="section4">
        <div className="section4-top">
            <div className="top">
                <h2>Most Ordered</h2>
                <div class="dropdown">
                    <button class="dropbtn">Today</button>
                    <div class="dropdown-content">
                        <a href="#">Today</a>
                        <a href="#">Today</a>
                        <a href="#">Today</a>
                    </div>
                </div>
            </div>

            <div className="bottom">

                <div className="bot-item">
                    <img src={Image1} alt="" />
                    <div className="item-text">
                        <h4>Spicy seasoned seafood noodles</h4>
                        <h5>200 dishes ordered</h5>
                    </div>
                </div>

                <div className="bot-item">
                    <img src={Image2} alt="" />
                    <div className="item-text">
                        <h4>Salted pasta with mushroom sauce</h4>
                        <h5>120 dishes ordered</h5>
                    </div>
                </div>

                <div className="bot-item">
                    <img src={Image3} alt="" />
                    <div className="item-text">
                        <h4>Beef dumpling in hot and sour soup</h4>
                        <h5>80 dishes ordered</h5>
                    </div>
                </div>

                <button className='dash-btn'>View All</button>

            </div>
        </div>

        <div className="section4-bottom">
            <div className="top">
                <h2>Most Type of Order</h2>
                <div class="dropdown">
                    <button class="dropbtn">Today</button>
                    <div class="dropdown-content">
                        <a href="#">Today</a>
                        <a href="#">Today</a>
                        <a href="#">Today</a>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                     {/* <ApexChart/> */}
                    <img src={Images} alt=""/>
                </div>

                <div className="right">
                    <div className="right-item">
                        <h3>Dine In</h3>
                        <h5>200 customers</h5>
                    </div>
                    <div className="right-item">
                        <h3>To Go</h3>
                        <h5>122 customers</h5>
                    </div>
                    <div className="right-item">
                        <h3>Delivery</h3>
                        <h5>264 customers</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Dashboard;