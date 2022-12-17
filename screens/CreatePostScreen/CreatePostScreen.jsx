import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Create post</Text>
        <Image
          style={{ position: "absolute", left: 16, bottom: 10 }}
          source={require("../../images/arrow-left.png")}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.addPhoto}>
          <View style={styles.photo}>
            <View style={styles.cameraBox}>
              <Image source={require("../../images/camera.png")} />
            </View>
          </View>
          <Text style={styles.addPhotoText}>Load photo</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#bdbdbd"
        />
        <View>
          <TextInput
            style={{ ...styles.input, paddingLeft: 28 }}
            placeholder="Location"
            placeholderTextColor="#bdbdbd"
          />
          <Image
            style={{ position: "absolute", left: 0, top: 13 }}
            source={require("../../images/map-pin.png")}
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonTitle}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Image source={require("../../images/trash.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingVertical: 11,
    paddingTop: 45,

    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 1,
    // borderWidth: 1,
  },
  screenTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  main: {
    paddingHorizontal: 16,
    paddingTop: 32,

    height: "100%",
    backgroundColor: "#ffffff",
  },
  addPhoto: {
    marginBottom: 32,

    // borderWidth: 1,
    // borderColor: "red",
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
  },
  addPhotoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",
  },
  cameraBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderBottomColor: "#e8e8e8",
    justifyContent: "center",
    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  button: {
    backgroundColor: "#F6f6f6",
    borderRadius: 25.5,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  buttonTitle: {
    textAlign: "center",
    color: "#bdbdbd",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    // alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: 9,
    // borderTopColor: "rgba(0, 0, 0, 0.3)",
    // borderTopWidth: 1,
  },
  footerIcon: {
    marginRight: 31,
  },
});
