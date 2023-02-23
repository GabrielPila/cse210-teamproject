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
                <p><EmailIcon className="landlord-icon-email"/> :  {email}</p>
                <p><PhoneIcon className="landlord-icon-number"/> :  {number}</p>
                <p><VideocamIcon className="landlord-icon-video"/>:  {videoAvailability ? <CheckCircleIcon className="landlord-icon"/> : <CancelIcon className="landlord-icon-cancel"/> }</p>
                <p>Response Time:  
                    <span className="landlord-icon-response"> {averageResponseTime}hr </span>
                </p>
            </div>
        </div>
    )
}

export default LandlordInfo;