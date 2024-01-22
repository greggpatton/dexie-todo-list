import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { db } from "../models/db";
import { TodoList } from "../models/TodoList";
import { Checkbox } from "expo-checkbox";
import { TodoItem } from "../models/TodoItem";

interface Props {
  todoList: TodoList;
}

export function AddTodoItem({ todoList }: Props) {
  const [item, setItem] = useState<TodoItem>({
    todoListId: todoList.id,
    title: "",
  });

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ paddingBottom: 10, flex: 4 }}>
        <TextInput
          placeholder="Add todo item..."
          value={item.title}
          style={{ fontSize: 20 }}
          onChangeText={(text) =>
            setItem((item) => ({
              ...item,
              title: text,
            }))
          }
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Enter") {
              db.todoItems.add(item);
              setItem({
                todoListId: todoList.id,
                title: "",
              });
            }
          }}
        />
      </View>
    </View>
  );
}

// import * as React from "react";
// import { useState } from "react";
// import { db } from "../models/db";
// import { TodoList } from "../models/TodoList";

// interface Props {
//   todoList: TodoList;
// }

// export function AddTodoItem({ todoList }: Props) {
//   const [item, setItem] = useState({
//     todoListId: todoList.id,
//     title: "",
//   });

//   return (
//     <div className="row add-item">
//       <div className="narrow">
//         <input type="checkbox" disabled />
//       </div>
//       <div className="todo-item-input">
//         <input
//           type="text"
//           placeholder="Add todo item..."
//           value={item.title}
//           onChange={(ev) =>
//             setItem((item) => ({
//               ...item,
//               title: ev.target.value,
//             }))
//           }
//           onKeyUp={(ev) => {
//             if (ev.key === "Enter") {
//               db.todoItems.add(item);
//               setItem({
//                 todoListId: todoList.id,
//                 title: "",
//               });
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// }
