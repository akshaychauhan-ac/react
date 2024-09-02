import { useEffect, useState } from "react";
import "./index.css";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";

const AdvancedImageSet = () => {
  const imageUrls = [
    image1,
    image2,
    image3,
    image4
  ];
  const [urlIndex, setUrlIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (urlIndex === (imageUrls.length - 1)) {
        setUrlIndex(0);
      } else {
        setUrlIndex(prev => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [urlIndex]);

  return <div className='advancedContainer'>
    <div className="advancedImageSet">
      <img className="imageSet" src={imageUrls[urlIndex]} alt={1}/>
    </div>
  </div>;
};

export default AdvancedImageSet;