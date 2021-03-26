
// import Edit from '../../assets/images/edit.png'
import "./settingsItem.scss";

const settingsItem = ({Img, text, price}) => {
    return(
            <div className="settings-box">
                <img src={Img} alt="rasm" className="settings-img"/>
                <div className="settings-box-inner">
                    <h3 className="settings-text">{text}</h3>
                    <h3 className="settings-price">{price}</h3>
                </div>
                <button className='edit'>Edit dish</button>
            </div>
            
    )
}

export default settingsItem;