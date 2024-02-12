


import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const EffectsExample = () => {
  const [show, setShow] = useState(false);

  

  //USE EFFECT
    // const [_api, _setApi]=useState("Mamoon_api")
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.warn("api called")

    // },[_api,count])

    // return(
    //     <View>
    //         <Text>USE EFFECT HOOK </Text>
    //         <Text> api: {_api} count: {count}</Text>
    //         <Button title="update_count" onPress={()=>setCount(count+1) }></Button>
    //         <Button title="update" onPress={()=>_setApi("Moon_api") }></Button>

    //     </View>
  return (
    <View>
      <Text>TOGGLE</Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />

      {show ? <Text>SHOWING TEXT</Text> : null}
    </View>
  );
};

export default EffectsExample;

