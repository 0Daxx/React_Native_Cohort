import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useRef } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import {
  BarcodeScanningResult, 
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from "expo-camera";
const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [ready, setReady] = useState<boolean>(false);

  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const [recording, setRecording] = useState<boolean>(false);

  const [result , setResult] = useState<BarcodeScanningResult | null>(null);
  const lastScanned = useRef<string | null>(null); 

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

  const startRecording = async () => {
    if (!micPermission?.granted) {
      const result = await requestMicPermission();
      if (!result.granted) {
        console.log("Microphone permission is not granted");
        return;
      }
    }

    setRecording(true);
    const video = await cameraRef.current?.recordAsync({ maxDuration: 10 });
    if (video?.uri) setVideoUri(video?.uri);
    // video is stored in cache memory 
    setRecording(false);
  };

  const stopRecording = () => {
    cameraRef.current?.stopRecording();
  };

  const onBarCodeScanned =  (scan : BarcodeScanningResult ) =>{
    if(lastScanned.current === scan.data ) return;
    lastScanned.current = scan.data ;
    setResult(scan)
  }

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        onCameraReady={() => setReady(true)}
        facing="back"
        onMountError={(error) => console.log(error)}
        // mode="video" // default is photo
        barcodeScannerSettings={{barcodeTypes:["qr"]}} 
        onBarcodeScanned={onBarCodeScanned}
      />

      <Button
        title={recording ? "stop" : "record"}
        disabled={!ready}
        onPress={recording ? stopRecording : startRecording}
      />

      <Button title="Take Photo" onPress={takePhoto} disabled={!ready} />

      {videoUri && <ThemedText selectable> {videoUri} </ThemedText>}
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ height: 200 }}
          contentFit="cover"
        />
      )}
      <ThemedText style={{ padding: 12 }}>
        {ready ? "Camera is ready" : "Camera is not ready"}
      </ThemedText>
    </ThemedView>
  );
};

export default Camera;

const styles = StyleSheet.create({});
