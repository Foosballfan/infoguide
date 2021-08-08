import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { KeycodeInput } from "react-native-keycode";

const App = () => {
  const [value, setValue] = useState("");
  const [numeric, setNumeric] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your access code</Text>

      <KeycodeInput
        numeric={numeric}
        value={value}
        onChange={newValue => setValue(newValue)}
        onComplete={completedValue => {
          alert("Completed! Value: " + completedValue);
        }}
      />

      <View style={styles.button}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingBottom: 200
  },
  text: {
    fontSize: 18,
    marginBottom: 32
  },
  button: {
    marginTop: 96
  }
});
