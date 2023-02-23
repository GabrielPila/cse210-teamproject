import "../styles/SingleListingImageGallery.css"
import ImageGallery from 'react-image-gallery';


const SingleListingImageGallery = ({images}) => {
    return (
        <div className="singleListingImageGallery">
           <ImageGallery className="singleListingImageGallery-imageGallery"items={images} showPlayButton={false} showThumbnails={false}/>
        </div>
    )
}

export default SingleListingImageGallery