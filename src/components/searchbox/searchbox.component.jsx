import { useState } from 'react';
import './searchbox.styles.scss';
import { Fragment } from 'react';
import ImageContainer from '../image-container/image-container.component';
import SearchImage from '../search-image/search-image.component';


const SearchBox = ({setShowRandomImages}) => {
    
    const [input, setInput] = useState('');
    console.log('rendered searchbox');


    const handleSubmit = ((e) => {
        e.preventDefault();
        setInput(e.target.elements.formInput.value);
        console.log('you have handled the submit');
    });
        
        return (
            <Fragment>
                    <div className='searchbox-container'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="formInput"
                                placeholder='Search'
                            />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <SearchImage setShowRandomImages={setShowRandomImages} searchInput={input} />
            </Fragment>
        )
};

export default SearchBox