

import "./SetItem.scss";

const SetItem = ({Img, title, text}) => {
    return(
        <>
                <div className="set ">
                    <div className="set-item">
                        <div className='img'>{Img}</div>
                            <div className="set-item-inner">
                                <h3 className="set-text">{title}</h3>
                                <h3 className="set-price">{text}</h3>
                            </div>
                    </div>
                </div>

            
        </>
    )
}

export default SetItem;