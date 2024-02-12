import React from "react";
import { View, Text, SectionList } from "react-native";

const Sections_ = () => {
    const stds = [
        {
            title: "Section 1",
            data: [
                {
                    id: 1,
                    name: "Moon",
                    course: ["pf", "OOP", "AI"],
                },
                {
                    id: 2,
                    name: "Ali",
                    course: ["pf", "OOP", "AI"],
                },
            ],
        },
        {
            title: "Section 2",
            data: [
                {
                    id: 3,
                    name: "Ahmad",
                    course: ["pf", "OOP", "AI"],
                },
                {
                    id: 4,
                    name: "ABD",
                    course: ["pf", "OOP", "AI"],
                },
                {
                    id: 5,
                    name: "Kohli",
                    course: ["pf", "OOP", "AI"],
                },
                {
                    id: 6,
                    name: "Babar",
                    course: ["pf", "OOP", "AI"],
                },
            ],
        },
    ];
    return (
        <View>
            <Text>SECTIION LISTS</Text>
            <SectionList
                sections={stds}
                renderItem={({ item }) => <Text>{item.id}</Text>}
                renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />

        </View>
    )

}

export default Sections_;