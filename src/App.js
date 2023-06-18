import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Institutions from './components/institutions/Institutions';
import Topics from './components/topics/Topics';
import Schedule from './components/schedule/Schedule';
import Venue from './components/venue/Venue';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className='max-w-screen-xl mx-auto px-4 lgl:px-10'>
        <Banner />
        <Institutions />
        <Topics />
        <Schedule />
        <Venue />
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App