/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, useState } from 'react';
import {
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';
import UserData from './Components/UserData'


let data = 10

const fun2 = (val) => {
  data = 20
  console.warn(data)
}


//STATES

function App(): JSX.Element {

  const [name, setName] = useState("Mamoon");
  function fun3() {
    setName("Moon")
  }

 
  //USING WITH JSX  
  return (
    <View>
      {/* <Text style={{ fontSize: 20 }}>{data}</Text>
      

      <Text style={{ backgroundColor:'cyan', padding:5, fontSize:30  }}>BUTTON FUNCSTIONS</Text>
      <Button title='maza aya' onPress={() => fun2(29)} color={'blue'}></Button>
      
      <Text style={{ backgroundColor:'cyan', padding:5, fontSize:30  }}>USER DATA IMPORTED</Text>
      <UserData></UserData>

      <Text style={{ backgroundColor:'cyan', padding:5, fontSize:30 }}>STATES</Text>



      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title='update name' onPress={fun3} color={'red'}></Button>

      <App2 name={name} age={21} ></App2>
      <Button title='update_props_data' onPress={()=>setName("MOON")}></Button> */}

      {/* FLAT LIST */}

      <Text>FLAT LIST ARE</Text>
      <FlatList
        data={std_data}
        renderItem={({ item }) => <Text>
          id: {item.id}
          name: {item.name}</Text>}
      />

    </View>

  );
}

// function App2(props): JSX.Element {
//   return (
//     <View>
//       <Text style={{ backgroundColor: 'cyan', padding: 5, fontSize: 30 }}> Component: 2</Text>
//       <Text style={{ backgroundColor: 'green', padding: 5, }}> {props.name}</Text>
//       <Text style={{ backgroundColor: 'green', padding: 5, }}> {props.age}</Text>
//     </View>
//   );
// }

export default App;
