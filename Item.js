import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
export default class Todo extends React.PureComponent {
    // toggle a todo as completed or not via update()

    render() {
        return (
              <View style={{ flex: 1, height: 48, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 8 }}>
                      <Text>{this.props.Name}</Text>
                  </View>
              </View>
        );
    }
}