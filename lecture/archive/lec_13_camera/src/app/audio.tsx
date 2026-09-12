import { StyleSheet, Text, View , Button , Alert } from 'react-native'
import React, { useEffect } from 'react'
import {useAudioPlayer} from "expo-audio";

const SAMPLE_AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const SAMPLE_AUDIO_URL2 = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";

import {AudioModule , RecordingPresets , setAudioModeAsync , useAudioRecorder , useAudioRecorderState} from "expo-audio";


function RecordScreen (){
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const state = useAudioRecorderState(recorder);

  useEffect(() => {
    (async () =>{
      const permission = await AudioModule.requestRecordingPermissionsAsync();
      if(!permission.granted){
        Alert.alert("Recording permission not granted");
        return ;
      }
      await setAudioModeAsync({
        playsInSilentMode: true , 
        allowsRecording: true ,
    })
  })();
}, []);


  const start=  async () => {
    await recorder.prepareToRecordAsync();
    recorder.record();
  }

  const stop = async () => {
    await recorder.stop();
    Alert.alert("Saved" , recorder.uri ?? "No uri");
    
  }

  return (
    <View style={{}} >

    </View>
  )
}


const audio = () => {
  const player = useAudioPlayer(SAMPLE_AUDIO_URL , {downloadFirst : true});
  // const {playAsync , pauseAsync , stopAsync , isPlaying} = useAudioPlayer(SAMPLE_AUDIO_URL);
  return (

    <View style={{flex:1 , justifyContent:"center" , gap:10 , padding:10}}>
      <Button  title="Play Audio" onPress={() => player.play() } />
      <Button title="Pause Audio" onPress={() => player.pause() } />
      <Button title="Replay" onPress={() => {
        player.seekTo(0);
        player.play();
      } } />
      <Text>audio</Text>
    </View>
  )
}

export default audio

const styles = StyleSheet.create({})