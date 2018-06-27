import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import IdeaCard from '../IdeaCard/IdeaCard';

export default class IdeaContainer extends Component<props> {

  render() {
    const IdeaCards = this.props.ideas.map(idea => {
      return (
        <IdeaCard
          key={idea.id}
          idea={idea}
          deleteIdea={this.props.deleteIdea}
          upVoteIdea={this.props.upVoteIdea}
          downVoteIdea={this.props.downVoteIdea}/>
      )
    })
    return (
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {IdeaCards}     
      </ScrollView>
    )
  }
} 

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0,
    width: 400,
    overflow: 'scroll'
  }
});