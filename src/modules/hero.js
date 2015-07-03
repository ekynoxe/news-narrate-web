import React from 'react';
import _ from 'lodash';

class Hero extends React.Component {
    render () {
        return <section className="hero">
            <video autoPlay muted loop poster="/build/img/heroBg.jpg" className="hero__video">
                <source src="http://res.cloudinary.com/skynews/video/upload/vc_auto/v1435760116/landingpage-bg_e0klcl.mp4" type="video/mp4"></source>
            </video>
            <div className="hero__content">
                <h1 className="hero__title">7 / 7 ten years on</h1>
                <p className="hero__text">On 7 July, 2005, four suicide bombers attacked London killing 52 people. Watch the survivors’ stories and see how the day unfolded.</p>
            </div>
        </section>
    }
}

export default Hero;