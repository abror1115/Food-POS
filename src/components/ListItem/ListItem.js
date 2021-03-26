

import "./main.scss";

const ListItem = ({Img, text, price, text1}) => {
    return(
            <button className="item">
                <img src={Img} alt="rasm" className="img"/>
                <div className="item-inner">
                    <h3 className="text">{text}</h3>
                    <h3 className="price">{price}</h3>
                    <h3 className="text1">{text1}</h3>
                </div>
            </button>
            
    )
}

export default ListItem;