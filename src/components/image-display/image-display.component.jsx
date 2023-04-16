import { useEffect, useState } from 'react';
import './image-display.styles.scss';


const ImageDisplay = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random/?client_id=bsqbdHx7Sh35rWmh9ddCXHtWDn-ckRUbiTNMWMVNxJA&count=2&orientation=landscape`)
        .then(response => response.json())
        .then(images => setImages(images));
    }, [])
    
        return (
            <div className='image-container'>
                    <h2>This is the image display component</h2>
                    {images.map(item => (
                        <img className='image-item' key={item.id} src={item.urls.regular} alt='cool' />
                        ))}
                </div>
                )
};


export default ImageDisplay;