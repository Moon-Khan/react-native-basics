import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const App = (props) => {
  const [isHungry, setHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name} and I am {isHungry ? "hungry" : "full"}
      </Text>
      <Button
        onPress={() => setHungry(!isHungry)}
        title={isHungry ? "Give me food" : "Thank You"}
      />
    </View>
  );
};

export default App;
