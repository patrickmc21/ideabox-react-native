import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class IdeaCard extends Component<Props> {
  constructor() {
    super();
    this.state = {
      
    }
  }

  handleDelete = () => {
    const id = this.props.idea.id;

    this.props.deleteIdea(id);
  }

  handleUpVote = () => {
    const id = this.props.idea.id;

    this.props.upVoteIdea(id);
  }

  handleDownVote = () => {
    const id = this.props.idea.id;

    this.props.downVoteIdea(id);
  }

  render() {
    let quality;

    switch (this.props.idea.qualityNum) {
      case 0:
        quality = 'Swill';
        break;
      case 1: 
        quality = 'Plausible';
        break;
      case 2:
        quality = 'Genius';
        break;
    };

    return (
      <View style={styles.ideaCard}>
        <Text style={styles.title}>
          {this.props.idea.title}
        </Text>
        <Button
            style={styles.remove} 
            color='#D1D1D1'
            title='X'
            onPress={this.handleDelete}/>
        <Text style={styles.body}>
          {this.props.idea.body}
        </Text>
        <Button
            style={styles.vote} 
            color='#D1D1D1'
            title='Up'
            onPress={this.handleUpVote}/>
            <Button
            style={styles.vote} 
            color='#D1D1D1'
            title='Down'
            onPress={this.handleDownVote}/>
        <Text style={styles.quality}>
          Quality: {quality}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ideaCard: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderColor: '#D1D1D1', 
    borderWidth: 1,
    marginTop: 10,
    height: 200,
    width: 300
  },
  title: {
    fontSize: 20,
    width: 240,
  },
  remove: {
    width: 20
  },
  body: {
    height: 110,
    width: 240
  },
  vote: {
    width: 20
  },
  quality: {
    fontSize: 20
  }
});