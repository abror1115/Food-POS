import "./DashItem.scss";

const DashItem = ({Img, text, price, pros, Img2}) => {
    return(
            <div className="itemDash">
                <div className="item-Top">
                    <img src={Img} alt="rasm" className="img"/>
                    <h3 className="pros">{pros}</h3>
                    <img src={Img2} alt=""/>
                </div>

                <div className="item-in">
                    <h3 className="text">{text}</h3>
                    <h3 className="price">{price}</h3>
                </div>
            </div>
            
    )
}

export default DashItem;