

import "./HomeRightItem.scss";

const HomeRightItem = ({Img, text, price, count, total,inHome}) => {
    return(
        <>
            <div className="homeright-top">
            <div className="left1">
             <div className="HomeRight-item">
                <img src={Img} alt="rasm" className="img"/>
                <div className="HomeRight-item-inner">
                    <h3 className="HomeRight-text">{text}</h3>
                    <h3 className="HomeRight-price">{price}</h3>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="count">
                <h3>{count}</h3>
            </div>
            <div className="total-price">
                <h3>{total}</h3>
            </div>
        </div>
            </div>
            <div className="homeright-bottom">
                <span>{inHome}</span>
            </div>

            
        </>
    )
}

export default HomeRightItem;