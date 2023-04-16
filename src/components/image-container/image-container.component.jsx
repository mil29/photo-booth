import './image-container.styles.scss';
import ImageDisplay from '../image-display/image-display.component';
import SearchImage from '../search-image/search-image.component';
import { useState } from 'react';


const ImageContainer = ({ data }) => {
    
    const [formData, setFormData] = useState("");
    const nums = 1;
    console.log(`this is imagecontainer ${data}`);
    
    return (
        <>
            {nums === 1 ? <SearchImage searchInput={data} /> : <ImageDisplay />}
        </>
    )
};


export default ImageContainer;