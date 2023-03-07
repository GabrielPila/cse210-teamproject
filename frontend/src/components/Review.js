import { Grid } from "@mui/material"
import "../styles/Review.css"

const Review = ({created_at, comment}) => {
    const parseDate = (date) => {
        let parsed = "" 
        try {
            parsed = date.split("T")[0]
        }catch(e){
            parsed = ""
        }
        return parsed
    }
    return (
        <div className="review-review">
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <span className="review-comment">{comment}</span>
                </Grid>
                <Grid item xs={2} >
                    <span className="review-date">{parseDate(created_at)}</span>
                </Grid>
            </Grid>
        </div>
    )
}

export default Review