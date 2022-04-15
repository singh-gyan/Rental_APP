import React from "react";
import "./Explore.scss";
import pic1 from "./pexels-dmitry-zvolskiy-2082087 1.png";

function Explore(props) {
  return (
    <div className='explore-container' ref={props.propref}>
      <h1>Explore</h1>
      <p>From one-guest rooms to penthouses with pools and gardens</p>
      <div className='exp-content-wrapper'>
        <div className='exp-content'>
          <img src={pic1} alt='' />
          <div className='card'>
            <div className='body'>Room with one king-size bed
            <br />
            <button>35$</button>
            <button>28M2</button>
            </div>
            
            <div className='book'><button>Book!</button></div>
          </div>
        </div>
        <div className='exp-content'> <img src={pic1} alt='' />
          <div className='card'>
            <div className='body'>Room with one king-size bed
            <br />
            <button>35$</button>
            <button>28M2</button>
            </div>
            
            <div className='book'><button>Book!</button></div>
          </div></div>
      </div>
    </div>
  );
}

export default React.memo(Explore);
