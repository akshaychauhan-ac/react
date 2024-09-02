import { useState } from 'react';
import InteractiveBox from '../InteractiveBox';

const SlideAnimation = () => {
  const [animation, setAnimation] = useState(false);

  const handleClick = () => {
    setAnimation(true);
    // setTimeout(() => {
    //   setAnimation(false);
    // }, 5000);
  };

  return <div>
    <button onClick={handleClick}>Start Animation</button>
    {animation && (
      <InteractiveBox/>
    )}
  </div>;
};

export default SlideAnimation;