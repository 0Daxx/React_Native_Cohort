import { useEffect, useState } from "react";

import { Accelerometer } from "expo-sensors";

// custom hook
export function useAccelerometer() {
  const [available, setAvailable] = useState<boolean | null>(null);

  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [z, setZ] = useState<number | null>(null);

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;
    (async () => {
      const isAvailable = await Accelerometer.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;
      Accelerometer.setUpdateInterval(100);

      subscription = Accelerometer.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
      });
    })();
    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    // check if accelerometer is available
    Accelerometer.isAvailableAsync().then((result) => {
      setAvailable(result);
    });

    // subscribe to accelerometer data
    const subscription = Accelerometer.addListener((data) => {
      setX(data.x);
      setY(data.y);
      setZ(data.z);
    });

    // cleanup function to remove the listener when the component unmounts
    return () => {
      subscription.remove();
    };
  }, []);

  return {available,x , y ,z };
}
