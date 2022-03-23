import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Your browser don't support geolocation");
      return;
    }

    const watcher = geo.watchPosition(setPosition, setError);

    return () => geo.clearWatch(watcher);
  }, []);

  return {
    lat: position?.coords?.latitude,
    lon: position?.coords?.longitude,
    error,
  };
};

export default usePosition;
