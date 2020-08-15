import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import AddEntry from './components/AddEntry'
import reducer from './reducers'

export default class App extends React.Component {
  componentDidMount() {
    console.log('before')
    //debugger
    console.log('after')
  }

  render() {
    return (
      <View stype={{flex: 1}}>
        <Provider store={createStore(reducer)} >
          <AddEntry />
        </Provider>
      </View>
    );
  }
}
