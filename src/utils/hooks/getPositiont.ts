import { useState, useEffect } from 'react';

const usePosition = () => {
  type Coords = {
    latitude: number | null;
    longitude: number | null;
  };

  type Position = {
    coords: Coords;
  };

  const [position, setPosition] = useState<Position>({
    coords: {
      latitude: null,
      longitude: null,
    },
  });

  const [error, setError] = useState<string>('');

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Your browser don't support geolocation");
      return;
    }

    const watcher = geo.watchPosition(setPosition, (error) =>
      setError(error.message)
    );

    return () => geo.clearWatch(watcher);
  }, []);

  return {
    lat: position?.coords?.latitude,
    lon: position?.coords?.longitude,
    error,
  };
};

export default usePosition;
