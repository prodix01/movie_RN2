import React, {Component} from 'react';
import {AppLoading} from "expo";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import {View, Text, StyleSheet} from "react-native";


class App extends Component {

  state = {
    loaded: false
  };

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({loaded: true});

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {

    const {loaded} = this.state;

    if (loaded) {
      return (
          <View style={styles.container}>
            <Text>Loaded true</Text>
          </View>
      );
    }
    else {
      return (
          <AppLoading
              startAsync={this.loadAssets}
              onFinish={this.handleLoaded}
              onError={this.handleError}
          />
      )
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
});

export default App;
