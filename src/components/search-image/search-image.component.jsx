import { useEffect, useState } from 'react';
import './search-image.styles.scss';
import { Fragment } from 'react';


const SearchImage = ({ searchInput }) => {

    const [searchImages, setSearchImages] = useState([]);
    console.log(searchImages);

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=bsqbdHx7Sh35rWmh9ddCXHtWDn-ckRUbiTNMWMVNxJA&count=2&query=${searchInput}&per_page=2&orientation=landscape`)
        .then(response => response.json())
        .then(images => setSearchImages(images.results));
    },[])


            return (
                    <Fragment> 
                        <div>
                            {searchImages.map(item => (
                                <img className='image-item' key={item.id} src={item.urls.regular} alt='cool' />
                             ))}
                        </div>
                    </Fragment>
                )
};



export default SearchImage;