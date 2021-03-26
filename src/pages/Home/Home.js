import {useState} from 'react'
import Header from '../../containers/Header/Header';
import Menu from '../../containers/List/List';
import HomeRight from '../../containers/HomeRight/HomeRight';
import './home.scss';

const Home = () => {
    const [sidebarState, setSidebarState]= useState(false);
    const [activeState, setActiveState]= useState(false);

    return(
      <div className="wrap">
           <div className= 'wrap-header'>
        <div className="Header">
            <Header/>
        </div>
        <div className="section">
            <div className="section-top">
                <div className="left">
                    <h3>Choose Dishes</h3>
                    <div class="dropdown">
                        <button class="dropbtn">Dine In</button>
                        <div class="dropdown-content">
                            <a href="#">Dine In</a>
                            <a href="#">Dine In</a>
                            <a href="#">Dine In</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-bottom">
                <Menu/>
            </div>
        </div>
       </div>

        <div  className="section2">
            <h2 className='order'>Orders #34562</h2>

            <div className="section2-btn">
                <button className={` btn1 ${activeState == '' ? 'activ' : ''}`} onClick ={ () =>setActiveState('')}>Dine In</button>
                <button className={` btn1 ${activeState == 'to' ? 'activ' : ''}`} onClick ={ () =>setActiveState('to')}>To Go</button>
                <button className={` btn1 ${activeState == 'vg' ? 'activ' : ''}`} onClick ={ () =>setActiveState('vg')}>Delivery</button>
            </div>

            <div className="section2-link">
                <div className="item-link">
                    <h2>Item</h2>
                    <div className="item-left">
                        <h2 className="qty">Qty</h2>
                        <h2 className="price">Price</h2>
                    </div>
                </div>
            </div>

            <div className="section2-menu">
                <HomeRight/>
            </div>

            <div className="section2-bottom">
                <div className="des">
                    <h3 className="descount">Discount</h3>
                    <h3 className="price">$0</h3>
                </div>
                <div className="sub">
                    <h3 className="total">Sub total</h3>
                    <h3 className="price"> $ 21,03</h3>
                </div>
                <button onClick ={ () =>setSidebarState(!sidebarState)}  className="contine">
                    <h3>Continue to Payment</h3>
                </button>
            </div>

        <div className={`modal ${sidebarState ? 'active' : ''}`}>
            <div className="modal-top">
                <h2>Payment</h2>
                <h5>3 payment method available</h5>
            </div>

            <div className="modal-middle">
                <h3>Payment Method</h3>
                <div className="card">
                    <button className="card-item">Credit Card</button>
                    <button className="card-item">Paypal</button>
                    <button className="card-item">Cash</button>
                </div>
            </div>

            <div className="modal-bottom">
                <form className='form' >
                    <div className="card-name">
                        <label htmlFor="1">Cardholder Name</label>
                        <input required type="text" id='1'/>
                    </div>

                    <div className="card-number">
                        <label htmlFor="2">Card Number</label>
                        <input required type="text"  id='2'/>
                    </div>

                    <div className="card-date">
                        <div className="data">
                            <label htmlFor="3">Expiration Date</label>
                            <input required type="text" id='3'/>
                        </div>

                        <div className="data">
                            <label htmlFor="4">CVV</label>
                            <input required type="password" id='4'/>
                        </div>
                    </div>

                    <div className="type">

                        <div className="order">
                            <label htmlFor="">Order Type</label>
                            <select name="" id="" >
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                                <option value="">Dine In</option>
                            </select>
                        </div>

                        <div className="table">
                            <label htmlFor="5">Table no.</label>
                            <input type="text" id='5'/>
                        </div>
                    </div>

                    <div className="btn">
                        <div className={` btn3 ${sidebarState == '' ? 'active' : ''}`} onClick ={ () =>setSidebarState('')}>Cancel</div>
                        <button className={`${sidebarState == 'required' ? 'active' : ''}`} onClick ={ () =>setSidebarState('required')}>Confirm Payment</button>
                    </div>
                </form>
            </div>

        </div>
        </div>
        
      </div>
    )
}

export default Home;