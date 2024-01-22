import { View, Text, Pressable } from "react-native";
import { useLiveQuery } from "dexie-react-hooks";
import { TodoList } from "../models/TodoList";
import { db } from "../models/db";
import { TodoItemView } from "./TodoItemView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { AddTodoItem } from "./AddTodoItem";

interface Props {
  todoList: TodoList;
}

export function TodoListView({ todoList }: Props) {
  const items = useLiveQuery(
    () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
    [todoList.id]
  );

  if (!items) return null;

  return (
    <View style={{ gap: 5 }}>
      <View
        style={{
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>{todoList.title}</Text>
        <Pressable onPress={() => db.deleteList(Number(todoList.id))}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Pressable>
      </View>
      <View style={{ gap: 5 }}>
        {items.map((item) => (
          <TodoItemView key={item.id} item={item} />
        ))}
      </View>
      <View style={{ paddingTop: 10 }}>
        <AddTodoItem todoList={todoList} />
      </View>
    </View>
  );
}
