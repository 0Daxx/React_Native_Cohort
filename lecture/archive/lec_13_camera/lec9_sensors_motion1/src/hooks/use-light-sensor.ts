import { useEffect, useState } from "react";

import {Platform} from "react-native";
import { LightSensor } from "expo-sensors";

// custom hook
export function useLightSensor() {
  
  const [available, setAvailable] = useState<boolean | null>(null);
  const [lux , setLux] = useState<number | null>(null);


  useEffect(() => {
    if(Platform.OS !== "android") return;

    let subscription: { remove: () => void } | undefined;
    (async () => {
      const isAvailable = await LightSensor.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;
      
      LightSensor.setUpdateInterval(100);
      subscription = LightSensor.addListener((data) => {
        setLux(data.illuminance);
      });
    })();
    return () => subscription?.remove();
  }, []);


  return {available,lux };
}
