import { useState } from "react";
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

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export const RegistrationScreen = ({ styles }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const nameHandler = (text) => {
    setName(text);
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

  const onRegister = () => {
    if (name !== "" && email !== "" && password !== "") {
      console.log({ name, email, password });
    } else {
      setIsShowKeyboard(false);
      return alert("Fill in all the fields!!!");
    }

    setName("");
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
            marginTop: isShowKeyboard ? 150 : 260,
          }}
        >
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShowKeyboard ? -100 : 78,
            }}
          >
            <View style={styles.avaWrapper}>
              <View style={styles.avatar}>
                <View style={styles.addPhoto}>
                  <Image source={require("../../images/add.png")} />
                </View>
              </View>
            </View>
            <Text style={styles.title}>Registration</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={onRegister}
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={onRegister}
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
                  onSubmitEditing={onRegister}
                />
                <Text style={styles.show} onPress={isOpenPasswordHandler}>
                  {isOpenPassword ? "hide" : "show"}
                </Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onRegister}
              style={styles.button}
            >
              <Text style={styles.btnTitle}>Register</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.loginBox}>
                Already have a profile? Log in
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
