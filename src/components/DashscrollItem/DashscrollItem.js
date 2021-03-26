import "./DashscrollItem.scss";

const DashscrollItem = ({ownerImg, name, stat, price, status}) => {
    return(
        <div className = 'dash-list-item'>
            <div className="item-left">
                <img src={ownerImg} alt="rasm" className="ticket-owner-img"/>
                <div className="dash-owner">
                    <h3 className="owner-name">{name}</h3>
                    <h3 className="owner-stat">{stat}</h3>
                </div>
            </div>
            <div className="item-right">
                <div className="customer">
                    <h3 className="customer-price">{price}</h3>
                    <button className="customer-status">{status}</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default DashscrollItem;