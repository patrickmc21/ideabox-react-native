import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IdeaForm from './App/IdeaForm/IdeaForm';
import IdeaContainer from './App/IdeaContainer/IdeaContainer';

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
      ideas: [],
      currentId: 0
    }
  }

  addIdea = (idea) => {
    const ideas = [...this.state.ideas, {...idea, id: this.state.currentId}];
    const currentId = this.state.currentId + 1;
    this.setState({ ideas, currentId });
  }

  deleteIdea = (id) => {
    const oldIdeas = this.state.ideas;

    const ideas = oldIdeas.filter(idea => idea.id !== id);

    this.setState({ ideas });
  }

  upVoteIdea = (id) => {
    const oldIdeas = this.state.ideas;

    const ideas = oldIdeas.map(idea => {
      if (idea.id === id) {
        const newIdea = this.handleUpVote(idea);
        return newIdea;
      } else {
        return idea
      }
    });

    this.setState({ ideas })
  }

  downVoteIdea = (id) => {
    const oldIdeas = this.state.ideas;

    const ideas = oldIdeas.map(idea => {
      if (idea.id === id) {
        const newIdea = this.handleDownVote(idea);
        return newIdea;
      } else {
        return idea
      }
    });

    this.setState({ ideas })
  }

  handleUpVote = idea => {
    if (idea.qualityNum <= 1) {
      idea.qualityNum++;
      return idea;
    } else {
      return idea;
    }

  }

  handleDownVote = idea => {
    if (idea.qualityNum >= 1) {
      idea.qualityNum--;
      return idea;
    } else {
      return idea
    }
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
        <IdeaContainer 
          ideas={this.state.ideas}
          deleteIdea={this.deleteIdea}
          upVoteIdea={this.upVoteIdea}
          downVoteIdea={this.downVoteIdea}/>
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
  }
});
