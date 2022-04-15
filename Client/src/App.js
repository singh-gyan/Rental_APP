import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Explore from './Screens/Explore';
import AboutUs from './Screens/AboutUs';
import Login from './Screens/Login/Login';
function App() {
  const address = {
    home: 'Home',
    explore: 'Explore',
    aboutus: 'About us',
  };
  const [Navigate, setNavigate] = useState(address.home);
  const HomeRef = useRef();
  const ExploreRef = useRef();
  const AboutUsRef = useRef();
  const LoginRef = useRef();
  const RentalApp = ({ screen }) => {
    switch (screen) {
      case address.home:
        return <HomeScreen />;
      case address.explore:
        return <Explore />;

      default:
        return <HomeScreen />;
    }
  };
  const scroll = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='home'>
        <div className='tabs' ref={HomeRef}>
          <button onClick={() => scroll(HomeRef)}>Logo</button>
          <button onClick={() => scroll(ExploreRef)}>Explore</button>
          <button onClick={() => scroll(AboutUsRef)}>About us</button>
          <button onClick={() => scroll(LoginRef)}>Login</button>
          <button className='call'>Call</button>
        </div>
        <HomeScreen />
      </div>
      {/* <RentalApp screen={Navigate}/> */}
      <Explore propref={ExploreRef} />
      <AboutUs propref={AboutUsRef} />
      <Login propref={LoginRef} />
    </>
  );
}

export default App;
