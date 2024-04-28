import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTwisterEnglishAsync, selectTwisterEnglish } from './tongueSlice';

const Tongue = () => {
  const dispatch = useDispatch();
  const Twister = useSelector(selectTwisterEnglish);
  const [showTwister, setShowTwister] = useState(false);

  useEffect(() => {
    dispatch(fetchTwisterEnglishAsync());
    const timer = setTimeout(() => {
      setShowTwister(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [dispatch]);


  return (
    <div>
      {showTwister && Twister && Twister[1] && (
        <div>{Twister[1].text}</div>
      )}
    </div>
  );
};

export default Tongue;
