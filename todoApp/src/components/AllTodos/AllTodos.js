import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './AllTodos.styles';

const AllTodos = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.todo}>
            <TouchableOpacity style={styles.text}  onPress={() => onToggleTodo(index)}>
              <Text
                style={{
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                  color: item.completed ? 'gray' : 'white',
                  fontSize:22,
                  height:30
                }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AllTodos;
