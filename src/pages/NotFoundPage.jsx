import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <div className="container">
                <h2>Sorry, my friend! 😌</h2>

                <p className='not-found-text'>
                    This site is intended as a demonstration of the developer's capabilities, so this page will not be created...

                    <br/><br/>

                    Please go back to the main page and enjoy my work.
                    <br/>
                    ... psst, click the cart🤫
                </p>

                <Link to='/' className='btn'>Go On Main Page</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;