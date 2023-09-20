import React, {useState} from 'react';
import {TouchableOpacity, View, TextInput, Text} from 'react-native';
import styles from './AddTodo.styles'

const AddTodo = (props) => {
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      props.onAddTodo(text);
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput color='#FEFFFF' style={styles.input} placeholder="Yapılacak.." value={text} onChangeText={(value) => setText(value)} />
      <View style={styles.line} />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
