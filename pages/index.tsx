import React from 'react';
import Header from '../src/components/sections/header/Header';
import Title from '../src/components/sections/title/Title';
import AboutUs from '../src/components/sections/aboutUs/AboutUs';
import Footer from '../src/components/sections/footer/Footer';
import Flur from '../src/components/pageElements/flur/Flur';
import Stars from '../src/components/pageElements/stars/Stars';

const App = () => (
  <>
    <Flur />
    <Stars />
    <Header />
    <Title />
    <AboutUs />
    <Footer />
  </>
);

export default App;
