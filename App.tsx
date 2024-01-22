import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TodoLists } from "./components/TodoLists";
import { AddTodoList } from "./components/AddTodoList";
import { ResetDatabaseButton } from "./components/ResetDatabaseButton";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoLists />
      <AddTodoList />
      <ResetDatabaseButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    margin: 20,
    gap: 10,
  },
});
