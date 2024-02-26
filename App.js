import React, { Component, useEffect } from "react";
import { NativeModules, NativeEventEmitter, Button, View } from "react-native";
import { MetaMapRNSdk } from "react-native-expo-metamap-sdk";

function App(props) {
  console.log("sdk: ", sdk);

  useEffect(() => {
    const MetaMapVerifyResult = new NativeEventEmitter(
      NativeModules.MetaMapRNSdk
    );
    MetaMapVerifyResult.addListener("verificationSuccess", (data) =>
      console.log(data)
    );
    MetaMapVerifyResult.addListener("verificationCanceled", (data) =>
      console.log(data)
    );
  });
  const handleMetaMapClickButton = (props) => {
    MetaMapRNSdk.showFlow(
      "623e24701fbf38001c05ba92",
      "65b9b68fbab7d7001c952898",
      {}
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "powderblue",
      }}
    >
      <Button onPress={() => handleMetaMapClickButton()} title="Click here" />
    </View>
  );
}
export default App;
