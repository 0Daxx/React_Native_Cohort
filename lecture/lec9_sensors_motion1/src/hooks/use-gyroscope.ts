import { useEffect, useState } from "react";

import { Gyroscope } from "expo-sensors";

// custom hook
export function useGyroscope() {
  const [available, setAvailable] = useState<boolean | null>(null);

  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [z, setZ] = useState<number | null>(null);

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;
    (async () => {
      const isAvailable = await Gyroscope.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;

      Gyroscope.setUpdateInterval(100);

      subscription = Gyroscope.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
      });
    })();
    return () => subscription?.remove();
  }, []);

  return {available,x , y ,z };
}
