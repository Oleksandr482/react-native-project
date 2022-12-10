import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import addIcon from "../../images/add.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const LoginScreen = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const emailHandler = (text) => {
    setEmail(text);
  };
  const passwordHandler = (text) => {
    setPassword(text);
  };
  const isOpenPasswordHandler = () => {
    setIsOpenPassword(!isOpenPassword);
  };

  const onLogin = () => {
    console.log({ email, password });

    setEmail("");
    setPassword("");
    setIsShowKeyboard(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.background}
          source={require("../../images/imgBG.png")}
          resizeMode="cover"
        />
        <View
          style={{
            ...styles.wrapper,
            marginTop: isShowKeyboard ? 270 : 320,
          }}
        >
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShowKeyboard ? -100 : 78,
            }}
          >
            <Text style={styles.title}>Login</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={onLogin}
              />
              <View>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={passwordHandler}
                  secureTextEntry={!isOpenPassword}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onSubmitEditing={onLogin}
                />
                <Text style={styles.show} onPress={isOpenPasswordHandler}>
                  {isOpenPassword ? "hide" : "show"}
                </Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onLogin}
              style={styles.button}
            >
              <Text style={styles.btnTitle}>Login</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.loginBox}>
                Don't have a profile? Register
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     position: "absolute",
//     width: windowWidth,
//     height: windowHeight,
//     top: 0,
//     left: 0,
//   },
//   formContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   wrapper: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     width: "100%",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 16,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     padding: 16,
//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     marginBottom: 16,
//     borderRadius: 8,
//   },
//   button: {
//     backgroundColor: "#FF6C00",
//     borderRadius: 25.5,
//     padding: 16,
//     marginTop: 30,
//     marginBottom: 16,
//   },
//   btnTitle: {
//     fontSize: 16,
//     lineHeight: 19,
//     textAlign: "center",
//     color: "#ffffff",
//   },
//   loginBox: {
//     textAlign: "center",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   show: {
//     position: "absolute",
//     right: 10,
//     top: 15,
//   },
//   title: {
//     marginBottom: 30,
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//     marginHorizontal: "auto",
//   },
//   avaWrapper: {
//     position: "absolute",
//     top: -60,
//     width: "100%",
//     alignItems: "center",
//   },
//   addPhoto: {
//     position: "absolute",
//     right: -12.5,
//     bottom: 14,
//   },
// });
