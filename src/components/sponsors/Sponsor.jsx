import React from 'react';
import './sponsors.scss';
import sponsors1 from '../../img/sponsor1.png';
import sponsors2 from '../../img/sponsor2.png';
import sponsors3 from '../../img/sponsor3.png';
import sponsors4 from '../../img/sponsor4.png';

const Sponsor = () => {
    return (
        <section className='sponsors' data-aos="fade-down" data-aos-delay="550">
            <div className="container">
                <img src={sponsors1} alt="sponsor1"/>
                <img src={sponsors2} alt="sponsor2"/>
                <img src={sponsors3} alt="sponsor3"/>
                <img src={sponsors4} alt="sponsor4"/>
            </div>
        </section>
    );
};

export default Sponsor;