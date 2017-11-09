/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View,
  FlatList
} from 'react-native';
import firebase from 'react-native-firebase';
import Item from './Item'; // we'll create this next


export default class App extends Component {
  constructor(){
    super();
    this.ref = firebase.firestore().collection('testcs');
    this.unsubscribe = null;
    this.state = {
        textInput: '',
        loading: true,
        todos: [],
    };
  }


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  onCollectionUpdate = (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const { Name, Age } = doc.data();
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        Name,
        Age,
      });
    });
    this.setState({ 
      todos,
      loading: false,
   });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>
    );
  }
}