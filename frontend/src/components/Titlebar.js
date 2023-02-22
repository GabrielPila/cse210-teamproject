import { useNavigate } from "react-router-dom";
import "../styles/Titlebar.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Titlebar = ({title}) => {
    const navigate = useNavigate();
    const goBack = () => [
        navigate(-1)
    ]
    return (
        <div className="title-bar">
            <div className="back-button" onClick={goBack}>
                <ArrowBackIcon className="arrow-icon"/>
                <h6 className="back">BACK</h6>
            </div>
            <span className="title">{title}</span>
        </div>
    )
}


export default Titlebar