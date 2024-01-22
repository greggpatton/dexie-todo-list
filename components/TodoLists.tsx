import { View } from 'react-native';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../models/db';
import { TodoListView } from './TodoListView';

export function TodoLists() {
  const lists = useLiveQuery(() => db.todoLists.toArray());

  if (!lists) return null;

  return (
    <View style={{ flex: 1 }}>
      {lists.map(list => (
        <TodoListView key={list.id} todoList={list} />
      ))}
    </View>
  );
}
