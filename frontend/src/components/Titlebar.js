import "../styles/Titlebar.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Titlebar = ({title}) => {
    return (
        <div className="title-bar">
            <div className="back-button">
                <ArrowBackIcon className="arrow-icon"/>
                <h6 className="back">BACK</h6>
            </div>
            <span className="title">{title}</span>
        </div>
    )
}


export default Titlebar