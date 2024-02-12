import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Flat_list = () => {
    // FLAT LIST
    const users = [
        {
            id: 1,
            name: "Moon",
        },
        {
            id: 2,
            name: "Ali",
        },
        {
            id: 3,
            name: "Amina",
        },
        {
            id: 4,
            name: "Ahmed",
        },
        {
            id: 5,
            name: "Ahmed",
        },
        {
            id: 6,
            name: "Ahmed",
        },
        {
            id: 7,
            name: "Ahmed",
        },
        {
            id: 8,
            name: "Ahmed",
        },
        {
            id: 9,
            name: "Ahmed",
        },
        {
            id: 10,
            name: "Ahmed",
        },
    ];

    return (
        <View>
            <Text>Flat List</Text>
            <FlatList
                data={users}
                renderItem={({item})=><Ehsan item={item} />} // Pass the renderItem function directly
            />
        </View>
    );
};

const Ehsan = (props)=>{
    const item = props.item;
    return(
        <View style={styles.view_}>
            <Text style={styles.text}>id: {item.id}</Text>
            <Text style={styles.text}>name: {item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view_: {
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "red",
        marginBottom: 5,
    },
    text: {
        flex: 1,
        fontSize: 16, // Increased font size for better readability
        margin: 5,
        color: "red",
        textAlign: "center",
        backgroundColor: "cyan",
    },
});

export default Flat_list;
