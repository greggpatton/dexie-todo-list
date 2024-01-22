import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { db } from "../models/db";
import { useLiveQuery } from "dexie-react-hooks";

export function AddTodoList() {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const hasAnyList = useLiveQuery(async () => {
    const listCount = await db.todoLists.count();
    return listCount > 0;
  });

  return !isActive ? (
    <Button
      title={hasAnyList ? `Add another list` : `Create ToDo List`}
      onPress={() => setIsActive(!isActive)}
    />
  ) : (
    <View>
      <Text>Give your list a name:</Text>
      <TextInput
        autoFocus
        placeholder="Name of list..."
        value={title}
        onChangeText={(text) => setTitle(text)}
        onKeyPress={(ev) => {
          if (ev.nativeEvent.key === "Enter") {
            db.todoLists.add({ title });
            setTitle("");
            setIsActive(false);
          }
        }}
      />
    </View>
  );
}
