import { useEffect, useState } from "react";
import { Magnetometer } from "expo-sensors";
import { Platform } from "react-native";

// micro tesla , will convert into degrees
function getHeading(x: number, y: number) {
  const radians =
    Platform.OS === "ios" ? Math.atan2(x, y) : Math.atan2(-x, -y);

  const degrees = (radians * 180) / Math.PI;
  return (degrees + 360) % 360;
}

export default function useMagnetometer() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [x, setX] = useState<number | null>(null);
  const [y, setY] = useState<number | null>(null);
  const [z, setZ] = useState<number | null>(null);
  const [magnetometerData, setMagnetometerData] = useState<{
    x: number;
    y: number;
    z: number;
  } | null>(null);
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    let subscription: { remove: () => void | undefined };

    void (async () => {
      const isAvailable = await Magnetometer.isAvailableAsync();
      setAvailable(isAvailable);

      // subscribe
      Magnetometer.setUpdateInterval(100);

      subscription = Magnetometer.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
        setHeading(getHeading(data.x, data.y));
      });
    })();
  }, []);

  return { available, x, y, z, magnetometerData, heading };
}
