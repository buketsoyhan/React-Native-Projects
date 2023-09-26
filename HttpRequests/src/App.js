import React, { useState } from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const App = () => {
  const [userList, setUserList]=useState([])

  async function fetchData() {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/users')
    
    setUserList(response.data)
  }
  const renderUser=({item}) =><UserCard name={item.name}/>
  return (
    <SafeAreaView>
      <View>
        <FlatList
        data={userList}
        renderItem={renderUser}
        />
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
};

export default App;
