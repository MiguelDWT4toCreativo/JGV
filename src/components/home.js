import React from 'react';
import Hero from './home-components/hero';
import Features from './home-components/features';
import About from './home-components/about';
import AboutIntro from './home-components/about-intro';
import HowWorks from './home-components/how-works';
import Screenshot from './home-components/screenshots';
import SpecialFeatures from './home-components/special-features';
import ScreenshotsV2 from './home-components/screenshots-v2';
import VideoPromo from './home-components/video-promo';
import Testimonial from './home-components/testimonial';
import FactsSection from './home-components/facts-section';
import Contact from './home-components/contact';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Hero />
        <AboutIntro />
        <About />
        <Features />
        <HowWorks />
        <Screenshot />
        <SpecialFeatures />
        <ScreenshotsV2 />
        <Testimonial />
        <VideoPromo />
        <Contact />
        <Footer />
    </div>
}


export default Home
