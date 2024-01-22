import { Pressable, Text } from 'react-native';

import { resetDatabase } from "../models/db";

export function ResetDatabaseButton() {
    return (
        <Pressable
            style={{ alignItems: "center", backgroundColor: "#DDDDDD", padding: 10 }}
            onPress={() => {
                resetDatabase();
            }}
        >
            <Text>Reset Database</Text>
        </Pressable>
    );
}
