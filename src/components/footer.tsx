import React from 'react'

import "./footer.scss"

const FooterComponent = () => {
    return (
        <div className='footer-component'>
            <p>Copyright © 2019-{new Date(Date.now()).getFullYear().toString()}</p>
        </div>
    );
};

export default FooterComponent;
