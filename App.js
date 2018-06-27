import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IdeaForm from './App/IdeaForm/IdeaForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const ideas = [...this.state.ideas, idea];

    this.setState({ ideas });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperSection}>
          <View style={styles.headerWrapper}>
            <Text style={styles.idea}>
              idea
            </Text>
            <Text style={styles.box}>
              Box
            </Text>
          </View>
          <IdeaForm addIdea={this.addIdea}/>
        </View>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
  },
  upperSection: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#E5F3F2',
    height: 250,
    width: 400
  },
  headerWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    height: 30
  },
  idea: {   
    fontSize: 30,    
    textAlign: 'center',
    margin: 0,
    color: '#00A79D'
  },
  box: {    
    fontSize: 30,
    textAlign: 'center',
    margin: 0,
    color: '#6D6E71'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
