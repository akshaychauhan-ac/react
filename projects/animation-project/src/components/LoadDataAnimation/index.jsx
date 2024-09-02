import { useState } from 'react';
import "./index.css";
import Spinner from '../Spinner';

const LoadDataAnimation = () => {
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return <div className='loadDataContainer'>
    <button onClick={handleClick}>Load Data</button>
    {loader && (
      <Spinner/>
    )}
  </div>;
};

export default LoadDataAnimation;