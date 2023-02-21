import "../styles/LandlordInfo.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const LandlordInfo = ({name, email, number, videoAvailability, averageResponseTime}) => {
    return (
        <div className="landlordInfo">
            <div className="landlordInfo-content">
                <h1>{name}</h1>
                <p><EmailIcon /> : {email}</p>
                <p><PhoneIcon /> : {number}</p>
                <p><VideocamIcon />: {videoAvailability ? <CheckCircleIcon /> : <CancelIcon /> }</p>
                <p>Average Response Time: {averageResponseTime}hr</p>
            </div>
        </div>
    )
}

export default LandlordInfo;