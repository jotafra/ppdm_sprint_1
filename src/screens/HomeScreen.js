
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Button
} from "react-native";

export default function Home({ navigation }){
  return (
    <View style={styles.container}>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containere:{
    backgroundColor: "brown"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
});
