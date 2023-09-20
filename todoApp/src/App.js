import React, {useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Yapılacaklar {todos.length}</Text>
      <AllTodos todos={todos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo}/>
      <AddTodo onAddTodo={addTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    height: Dimensions.get('window').height,
    padding:10
  },
  header:{
    color:'#rgb(255,165,0)',
    fontSize:30,
    fontWeight:'bold'
  }
});

export default App;
