import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "grey",
    // backgroundColor: "red",
    borderWidth: 1,
    elevation: 1
  },
  image_style: {
    width: "100%",
    height: 300

    // resizeMode: "stretch"
  },
  horizantal_line: {
    borderBottomColor: "orange",
    borderBottomWidth: 2,
    borderTopWidth: 1,
    width: "100%"
  }
});
export default styles;
