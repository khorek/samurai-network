import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

const Preloader = (props) => {
    return <img src={preloader} alt='preloader' style={{ width: '50px' }} />
}

export default Preloader;