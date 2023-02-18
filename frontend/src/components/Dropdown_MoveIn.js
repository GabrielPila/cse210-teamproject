import { useState } from "react";
import "../styles/Dropdown_MoveIn.css";

function Dropdown_MoveIn ({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <div className="dropdown2">
            <div className="dropdown2-btn" onClick={e => setIsActive(!isActive)}>
                Move-In Date
                <span className="fas fa-caret-down"></span>
            </div>
            {
                isActive && (
                    <div className="dropdown2-content">
                        {options.map(option => (
                            <div onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }
                        } className="dropdown2-item">{option}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Dropdown_MoveIn