import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Posts</Text>
        <Image
          style={{ position: "absolute", right: 16, bottom: 10 }}
          source={require("../../images/log-out.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.userWrapper}>
          <Image
            style={styles.userAvatar}
            source={require("../../images/userAva.jpg")}
          />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        {/* <View style={styles.postsWrapper}>
          <Image
            style={{ width: "100%", marginBottom: 10, borderRadius: 20 }}
            source={require("../../images/111.png")}
          />
          <Image
            style={{ width: "100%", marginBottom: 10, borderRadius: 20 }}
            source={require("../../images/111.png")}
          />
          <Image
            style={{ width: "100%", marginBottom: 10, borderRadius: 20 }}
            source={require("../../images/111.png")}
          />
          <Image
            style={{ width: "100%", marginBottom: 10, borderRadius: 20 }}
            source={require("../../images/111.png")}
          />
          <Image
            style={{ width: "100%", marginBottom: 10, borderRadius: 20 }}
            source={require("../../images/111.png")}
          />
        </View> */}
      </ScrollView>
      {/* <View style={styles.footer}>
        <Image
          style={styles.footerIcon}
          source={require("../../images/grid.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../../images/new.png")}
        />
        <Image source={require("../../images/user.png")} />
      </View> */}
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
  },
  screenTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  userWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  postsWrapper: {
    paddingHorizontal: 16,
    marginBottom: 70,
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
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    borderTopWidth: 1,
  },
  footerIcon: {
    marginRight: 31,
  },
});
