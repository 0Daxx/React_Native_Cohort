import { Button, StyleSheet, Text, View , Image } from "react-native";
import React from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import { CameraView, useCameraPermissions } from "expo-camera";
const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = React.useRef<CameraView>(null);
  const [ready, setReady] = React.useState<boolean>(false);

  const [photoUri, setPhotoUri] = React.useState<string | null>(null);

  if (!permission) {
    return <ThemedText>Requesting camera permission...</ThemedText>;
  }

  if (!permission.granted) {
    return (
      <ThemedView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedText>Camera permission is not granted.</ThemedText>
        {/* <ThemedText onPress={requestPermission}>Grant permission</ThemedText> */}
        <Button title="Grant permission" onPress={requestPermission} />
      </ThemedView>
    );
  }

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync({ quality: 1 });
    if (photo?.uri) setPhotoUri(photo.uri);
  };
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        onCameraReady={() => setReady(true)}
        facing="back"
        onMountError={(error) => console.log(error)}
      />
      <Button title="Take Photo" onPress={takePhoto} disabled={!ready} />
      {
        photoUri && (
          // <Image source={{  }}  />
          <Image source={{uri : photoUri}} style={{height : 200}} contentFit="cover"  />
        )
      }
      <ThemedText style={{ padding: 12 }}>
        {ready ? "Camera is ready" : "Camera is not ready"}
      </ThemedText>
    </ThemedView>
  );
};

export default Camera;

const styles = StyleSheet.create({});
