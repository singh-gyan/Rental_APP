import PropertyCard from "../../Components/molecules/PropertCard";
import Image1 from "./pexels-max-vakhtbovych-5998051 1.png";
import Image3 from "./pexels-houzlook-com-3356416 2.png";
import Image2 from "./pexels-max-vakhtbovych-6492403 1.png";
import Image4 from "./pexels-oleg-zaicev-4834891 1.png";
import "./AboutUs.scss";
function AboutUs(props) {
  const CardProps = {
    titleStyles: {
      fontSize: "24px",
      fontWeight: "700",
      fontFamily: "Ubuntu",
      marginTop: "3%",
    },
    contentStyles: {
      fontSize: "14px",
      fontWeight: "300,Light",
      fontFamily: "Ubuntu",
      marginTop: "10px",
    },
  };
  const firstCard={
      marginTop: "0",
      paddingTop:'5%'
  }
  const ch1_content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun";

  return (
    <div className='aboutUs-container' ref={props.propref}>
      <h1>About Us</h1>
      <p>Allow us to tell you a short story</p>
      <div className='abs-wrapper'>
        <div className='row'>
          <div className='col'>
            <PropertyCard
              Image={Image1}
              {...CardProps}
              Title='Chapter 1'
              Content={ch1_content}
              sx={firstCard}
            />
            <div>
            
            <PropertyCard
              Image={Image3}
              {...CardProps}
              Title='Chapter 3'
              Content={ch1_content}
            />
              </div>
          </div>
          <div className='col'>
          
          <PropertyCard
              Image={Image2}
              {...CardProps}
              Title='Chapter 2'
              Content={ch1_content}
              sx={firstCard}
            />
            <PropertyCard
              Image={Image4}
              {...CardProps}
              Title='Chapter 4'
              Content={ch1_content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
