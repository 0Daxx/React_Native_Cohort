// src/app/onboard.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions
} from "react-native";
import { useAppTheme } from "@/theme/";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/context/AuthContext";
// Placeholder images - Replace with your actual assets
const CAROUSEL_DATA = [
  {
    id: "1",
    img: require("@/assets/images/onboard1.png"),
    title: "400+ Crore Orders Delivered",
  },
  {
    id: "2",
    img: require("@/assets/images/onboard2.png"),
    title: "Fastest Delivery in Town",
  },
  {
    id: "3",
    img: require("@/assets/images/onboard3.png"),
    title: "Exclusive Discounts Daily",
  },
];

export default function Onboard() {
  const {width , height} = useWindowDimensions();
  const { isAuth, setIsAuth } = useAuthStore();
  const router = useRouter();
  const { styles, colors, isDark } = useAppTheme();
  const [phone, setPhone] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setActiveIndex(viewableItems[0].index);
  }).current;

  const handleContinue = () => {
    // Handle continue logic here
    setIsAuth(true);
    console.log("Continue button pressed 1");
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex1}
      >
        <ScrollView style={styles.container}>
          <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

          {/* TOP HALF: Swipeable Image Carousel */}
          <View style={styles.carouselContainer}>
            <FlatList
              ref={flatListRef}
              data={CAROUSEL_DATA}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onViewableItemsChanged={onViewableItemsChanged}
              // viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    width: width ,
                    // width: "100%" ,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      flex: 1,
                      width: "100%",
                      // height: "100%",
                      resizeMode: "center",
                    }}
                  />
                  <Text
                    style={[
                      styles.h1,
                      {
                        marginTop: 16,
                        textAlign: "center",
                        paddingHorizontal: 20,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
              )}
            />

            {/* Pagination Dots */}
            <View style={[styles.row, { marginTop: 16 }]}>
              {CAROUSEL_DATA.map((_, i) => (
                <View
                  key={i}
                  style={[styles.dot, i === activeIndex && styles.dotActive]}
                />
              ))}
            </View>
          </View>

          {/* BOTTOM HALF: Login Form */}
          <View
            style={[
              styles.container,
              {
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                paddingTop: 32,
                paddingHorizontal: 24,
              },
            ]}
          >
            <Text
              style={[styles.h2, { marginBottom: 24, textAlign: "center" }]}
            >
              Log in or sign up
            </Text>

            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <Pressable style={styles.row}>
                <Text style={{ fontSize: 20 }}>🇮🇳</Text>
                <Text style={[styles.body, { marginLeft: 4 }]}>+91</Text>
              </Pressable>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Phone Number"
                placeholderTextColor={colors.textSec}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {/* Remember Me Checkbox (Simplified) */}
            <Pressable
              style={[styles.row, { marginTop: 16, alignItems: "center" }]}
              onPress={() => setRememberMe((prev) => !prev)}
              hitSlop={20}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  marginRight: 8,
                  backgroundColor: rememberMe ? colors.primary : "transparent",
                  borderWidth: 1,
                  borderColor: colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {rememberMe ? (
                  // <Text style={{ color: "#FFF", fontSize: 12 }}>✓</Text>
                  <Ionicons name="checkmark" size={16} color="#FFF" />
                ) : (
                  <Ionicons name="square" size={16} color="transparent" />
                )}
              </View>
              <Text style={styles.bodySec}>
                Remember my login for faster sign-in
              </Text>
            </Pressable>

            {/* Continue Button */}
            <Pressable
              style={styles.btnPrimary}
              // activeOpacity={0.8}
              hitSlop={20}
              onPress={handleContinue}
            >
              <Text style={styles.btnText}>Continue</Text>
            </Pressable>

            {/* Social Logins */}
            <View style={styles.divider} />
            <View style={[styles.row, { justifyContent: "center", gap: 24 }]}>
              <Pressable
                style={[
                  styles.card,
                  {
                    width: 56,
                    height: 56,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={{ fontSize: 24 }}>G</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.card,
                  {
                    width: 56,
                    height: 56,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={{ fontSize: 24 }}>✉️</Text>
              </Pressable>
            </View>

            {/* Footer Policies */}
            <Text
              style={[
                styles.caption,
                { textAlign: "center", marginTop: 32, lineHeight: 20 },
              ]}
            >
              By continuing, you agree to our{"\n"}
              <Text style={{ color: colors.primary }}>
                Terms of Service
              </Text> •{" "}
              <Text style={{ color: colors.primary }}>Privacy Policy</Text> •{" "}
              <Text style={{ color: colors.primary }}>Content Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
