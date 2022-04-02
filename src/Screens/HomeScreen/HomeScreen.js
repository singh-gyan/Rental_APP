import React from 'react';
import "./HomeScreen.scss"
import SVGSearchIcon from '../../Assets/SVGSearchIcon'
function HomeScreen(props) {
  return (
      <div >
    <div className='content-wrapper' ref={props.propref}>
      <div className='title'>Rethink your living & renting<p>Make your stay painless with us</p></div>
     <div className='search-wrapper'>
         <div className='container'>CITY<p>Select your city</p></div>
         <div className='container'>DATES<p>Select your dates</p></div>
         <div className='container'>GUESTS<p>Add your guest</p></div>
         <button className='container-btn'><SVGSearchIcon /><span>Search</span></button>
     </div>
    </div>
    </div>
  );
}

export default React.memo(HomeScreen);
