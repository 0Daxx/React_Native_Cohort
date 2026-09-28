import { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";

export default function useAccelerometer() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  let subscription: { remove: () => void } | null = null;
  // let subscription: { remove: () => void; } | null = null;

  useEffect(() => {
    let subscription: { remove: () => void } | null = null;

    (async () => {
      const isAvailable = await Accelerometer.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;
      if (isAvailable) {
        subscription = Accelerometer.addListener((accelerometerData) => {
          setData(accelerometerData);
        });
        Accelerometer.setUpdateInterval(100);
        // 16 for 60fps, 33 for 30fps, 100 for 10fps, 1000 for 1fps
      }

      return () => subscription?.remove();
    })();
  }, []);

  return { available, data };
}
