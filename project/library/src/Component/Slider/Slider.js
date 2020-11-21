import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {"https://www.nlb.gov.sg/Portals/0/ScrollingImages/SoundscapeSG-NLB-Corporate%20(light).jpg?ver=2020-08-06-092837-373"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {"https://www.nlb.gov.sg/Portals/0/ScrollingImages/Doc-NLBwebsite-Tier1-V3.jpg?ver=2020-05-20-222325-787"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {"https://www.nlb.gov.sg/Portals/0/ScrollingImages/TLBB_Hero%20Banner_closed.png?ver=3zIHko1n_Klho4lfue_Hng%3d%3d"}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {"https://www.nlb.gov.sg/Portals/0/ScrollingImages/NATL_webbanner-02.png?ver=jr9y3HgbtT4EY6xBkPKqQw%3d%3d"}
            alt="Fourth slide"
          />
        </Carousel.Item>


      </Carousel>
    );
  }
  
export default ControlledCarousel;