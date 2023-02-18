import { useState } from "react";
import "../styles/Dropdown_Price.css";

function Dropdown_Price ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['<$1000', '<$2000', '>=$3000'];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                Price
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        {options.map(option => (
                            <div onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }
                        } className="dropdown-item">{option}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown_Price