import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFA500",
  },
  product: {
    padding: 5,
    backgroundColor: "#EDEFF1",
    borderRadius: 30,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    paddingLeft:20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: { color: "black", fontSize: 22, marginTop:8, marginLeft:10 },
});
