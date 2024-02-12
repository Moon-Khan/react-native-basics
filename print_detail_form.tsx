import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const PrintDetail = () => {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [display, setDisplay] = useState(false);

    function clear() {
        setDisplay(false);
        setName("");
        setRollno("");
        setEmail("");
        setAge("");
    }

    function valid() {
        if (
            name === "Mamoon" &&
            rollno === "20F-0361" &&
            email === "f200361@cfd.nu.edu.pk" &&
            age === "21"
        ) {
            setDisplay(true);
        } else {
            console.warn("Wrong credentials");
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 25 }}>Print Details Form</Text>

            {display ? (
                <View>
                    <Text>Name: {name}</Text>
                    <Text>Roll No: {rollno}</Text>
                    <Text>Email: {email}</Text>
                    <Text>Age: {age}</Text>

                    <View style={{ margin: 5 }}>
                        <Button title="Clear Details" onPress={clear} />
                    </View>
                </View>

            ) : (
                <>
                    <TextInput
                        style={Styles.TextInput}
                        placeholder="Enter Your name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={Styles.TextInput}
                        placeholder="Enter Your RollNo"
                        value={rollno}
                        onChangeText={(text) => setRollno(text)}
                    />
                    <TextInput
                        style={Styles.TextInput}
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={Styles.TextInput}
                        placeholder="Enter Your Age"
                        value={age}
                        onChangeText={(text) => setAge(text)}
                    />

                    <View style={{ margin: 5 }}>
                        <Button title="Print Details" onPress={valid} />
                    </View>

                </>
            )}
        </View>
    );
};

const Styles = StyleSheet.create({
    TextInput: {
        borderColor: 'blue',
        fontSize: 18,
        borderWidth: 2,
        color: 'blue',
    },
});

export default PrintDetail;
