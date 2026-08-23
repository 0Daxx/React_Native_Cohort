import { useAccelerometer } from "@/hooks/use-accelerometer";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BALL_SIZE = 40;
const OBSTACLE_SIZE = 60;
const MOVE_MULTIPLIERS = { easy: 80, normal: 120, hard: 160 };
const MOVE = 100;
const PLAY_BOX_WIDTH = 320;
const PLAY_BOX_HEIGHT = 400;

const TiltGame = () => {
  const insets = useSafeAreaInsets();
  const { available, x, y, z } = useAccelerometer();

  return (
    <View style={styles.sensorBox , { paddingTop: insets.top + 12 } }>
      
      <Text style={styles.sensorTitle}> Accelerator(g) </Text>
      <Text style={styles.sensorLine}> x : {x?.toFixed(2)}</Text>
      <Text style={styles.sensorLine}> y : {y?.toFixed(2)}</Text>
      <Text style={styles.sensorLine}> z : {z?.toFixed(2)}</Text>

      <Text style={styles.sensorHint}>
        {" "}
        Flat on table have z = 1 . Tilt left/right z changes . Tilt
        forward/backward y changes{" "}
      </Text>

      <View style={styles.playBox}>
        <View style={[styles.ball, { transform: [  { translateX: x! * MOVE }, { translateY: y! * MOVE }] }]} />
      </View>
    </View>
  );
};

export default TiltGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0b1220",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  title: {
    color: "#f8fafc",
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
  sensorToggle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
  },
  sensorToggleText: {
    fontSize: 16,
  },
  playBox: {
    height: PLAY_BOX_HEIGHT,
    marginVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#334155",
    backgroundColor: "#111827",
    overflow: "hidden",
    position: "relative",
  },
  pausedOverlay: {
    opacity: 0.8,
  },
  ball: {
    width: BALL_SIZE,
    height: BALL_SIZE,
    borderRadius: BALL_SIZE / 2,
    backgroundColor: "#22d3ee",
    position: "absolute",
    left: PLAY_BOX_WIDTH / 2 - BALL_SIZE / 2,
    top: PLAY_BOX_HEIGHT / 2 - BALL_SIZE / 2,
    shadowColor: "#00d9ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  obstacle: {
    width: OBSTACLE_SIZE,
    height: OBSTACLE_SIZE,
    borderRadius: 12,
    backgroundColor: "#fbbf24",
    position: "absolute",
    shadowColor: "#fbbf24",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  pauseOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  pauseText: {
    color: "#f1f5f9",
    fontSize: 32,
    fontWeight: "700",
  },
  gameOverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  gameOverText: {
    color: "#ef4444",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 12,
  },
  gameOverScore: {
    color: "#f1f5f9",
    fontSize: 24,
    fontWeight: "600",
  },
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 16,
  },
  footerText: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  footerHint: {
    color: "#cbd5e1",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 4,
  },
});
