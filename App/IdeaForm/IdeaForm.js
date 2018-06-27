import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

export default class IdeaForm extends Component<Props> {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleSubmit = () => {
    const { title, body } = this.state;

    if ( title !== '' || body !== '') {
      const idea = {
        title,
        body,
        qualityNum: 1
      };
      this.props.addIdea(idea);
      this.setState({ title: '', body: ''});      
    }
  }

  render() {
    return (
      <View style={styles.form}>
        <TextInput 
          style={styles.title}
          value={this.state.title}
          placeholder='Title'
          name='title'
          onChangeText={(text) => this.setState({ title: text})}
        />
        <TextInput 
          style={styles.body}
          value={this.state.body}
          placeholder='Body'
          name='body'
          onChangeText={(text) => this.setState({ body: text})}/>
        <View style={styles.save}>
          <Button 
            color='#FFFFFF'
            style={styles.save}
            title='Save'
            onPress={this.handleSubmit}/>
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E5F3F2',
    height: 100,
    width: 300
  },
  title: {
    height: 40,
    width: 200,
    backgroundColor: '#FFFFFF', 
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 10
  },
  body: {
    height: 40,
    width: 200,
    backgroundColor: '#FFFFFF', 
    borderColor: 'gray', 
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 10
  },
  save: {
    height: 40,
    width: 200,
    backgroundColor: '#00A79D',
  }
});