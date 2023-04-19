import logo from '../../logo.svg';
import './navbar.styles.scss';
import { Fragment, useState } from 'react';

import SearchBox from '../searchbox/searchbox.component';


const Navbar = ({setShowRandomImages = ()=>{}}) => {

    const newRandomImage = () => {
      
        window.location.reload(false)
    };
    const [shown, setShown] = useState(false);

    return (
        <Fragment>
            <div className='navbar-container'>
                <img src={logo} className='logo' alt="logo" />
                <h2 className='nav-title' onClick={newRandomImage}>Random</h2>
                <h2 className='nav-title' onClick={() => {
                    setShown(!shown)
                    setShowRandomImages(false)
                    }}>Search</h2>
            </div>
            {shown && <SearchBox  setShowRandomImages={setShowRandomImages= ()=>{}}/>}
        </Fragment>
    )
};


export default Navbar;