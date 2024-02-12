import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Login = () => {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("0333");
    const [isLogged, setLogged] = useState(false);

    function loggedIn() {
        if (name === "Mamoon" && rollno === "20F-0361") {
            setLogged(true);
            setName("");
            setRollno("");
        } else {
            console.warn("Wrong Credentials");
        }
    }

    return (
        <View>
            {isLogged ? (
                <Text>Welcome to Our App</Text>
            ) : 
            (
                <>
                    <TextInput
                        style={{ borderColor: 'red', borderWidth: 1, marginBottom: 10 }}
                        placeholder="Enter Your Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={{ borderColor: 'red', borderWidth: 1, marginBottom: 10 }}
                        placeholder="Enter Your Roll No"
                        value={rollno}
                        onChangeText={(text) => setRollno(text)}
                    />
                    <Button title="Submit" onPress={loggedIn} />
                </>
            )}
        </View>
    );
};

export default Login;
