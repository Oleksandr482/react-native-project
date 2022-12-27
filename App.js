import { StatusBar } from "expo-status-bar";

import React, { useCallback, useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth } from "./firebase/config";
import { Main } from "./components/Main/Main";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Main />
      </View>
    </Provider>
  );
}
