import type { ExpoConfig } from "@expo/config";

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PREVIEW = process.env.EXPO_PUBLIC_PREVIEW === "true";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.dev";
  } else if (IS_PREVIEW) {
    return "preview";
  } else {
    return "prod";
  }
}

const getAppName = () => {
  if (IS_DEV) {
    return "Lecture11 Dev";
  } else if (IS_PREVIEW) {
    return "Lecture11 Preview";
  } else {
    return "Lecture11";
  }
};

export default {
  expo: {
    name: getAppName(),
    slug: "lecture",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "lecture11",
    userInterfaceStyle: "automatic",
    ios: {
      icon: "./assets/expo.icon"
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png"
      },
      predictiveBackGestureEnabled: false,
      package: `com.lecture11.${getUniqueIdentifier()}`,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "backgroundColor": "#208AEF",
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 76
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    },
    extra: {
      eas: {
        projectId: "20a0b38e-d1b6-48c3-acbd-f10f8d5b603a"
      }
    }
  }
} satisfies ExpoConfig;
