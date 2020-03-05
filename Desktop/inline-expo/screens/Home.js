import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'
import { SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

class Home extends Component {
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  
  }
loadInBrowser = () => {
    Linking.openURL("google.com").catch(err => console.error("Couldn't load page", err));
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
          <Button
          title='Goto Queue'
          onPress={this.loadInBrowser}

          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />



        <Button
          title='Signout'
          onPress={this.handleSignout}

          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(Home)
