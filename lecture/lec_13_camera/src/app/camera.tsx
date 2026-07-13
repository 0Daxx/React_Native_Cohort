import { Button, StyleSheet, Text, View, Image , ActivityIndicator , Alert , Linking } from "react-native";
import React, { useState, useRef } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
  type FlashMode,
  type CameraType,
} from "expo-camera";

import * as MediaLibrary from "expo-media-library";


async function saveToGallery(uri: string) {
  const {granted , canAskAgain } = await MediaLibrary.requestPermissionsAsync(true);

  if(!granted){
    if(!canAskAgain){

      Alert.alert(
        "Photo Library access denied",
        "Enable Photo Library access in the Settings to save photos",
        [
          {text:"Cancel" , style:"cancel"},
          {text:"Open Setting" , onPress: ()=> Linking.openSettings()}
        ]
      )
    }
    throw new Error("Photos library permission denied");
  }
}

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [ready, setReady] = useState<boolean>(false);

  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const [recording, setRecording] = useState<boolean>(false);

  const [result, setResult] = useState<BarcodeScanningResult | null>(null);
  const lastScanned = useRef<string | null>(null);

  const [flash, setFlash] = useState<FlashMode>("off");
  const [torch, setTorch] = useState<boolean>(false);
  
  const [facing, setFacing] = useState<CameraType>("back");
  const [zoom, setZoom] = useState<number>(0);

  const cycleFlash = () => {
    setFlash((prevFlash) => (prevFlash === "off" ? "on" : prevFlash === "on" ? "auto" : "off"));
  }

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

  const onBarCodeScanned = (scan: BarcodeScanningResult) => {
    if (lastScanned.current === scan.data) return;
    lastScanned.current = scan.data;
    setResult(scan);
  };

  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        onCameraReady={() => setReady(true)}
        facing={facing}
        zoom={zoom}
        onMountError={(error) => console.log(error)}
        // mode="video" // default is photo
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={onBarCodeScanned}
        flash={flash}
        enableTorch={torch}
      />

      <Button title="Flip Camera" onPress={() => setFacing((prev) => (prev === "back" ? "front" : "back"))} />
      <Button title="Zoom In" onPress={() => setZoom((prev) => Math.min(prev + 0.1, 1))} />
      <Button title="Zoom Out" onPress={() => setZoom((prev) => Math.max(prev - 0.1, 0))} />

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
      <Button title={`Flash: ${flash} `} onPress={cycleFlash} />
      <Button
        title={`Torch: ${torch ? "on" : "off"} `}
        onPress={() => setTorch((prev) => !prev)}
      />
      <ThemedText> Zoom : {(zoom * 100).toFixed(0)}% </ThemedText>
      <ThemedText style={{ padding: 12 }}>
        {ready ? "Camera is ready" : "Camera is not ready"}
      </ThemedText>
    </ThemedView>
  );
};

export default Camera;

const styles = StyleSheet.create({});
