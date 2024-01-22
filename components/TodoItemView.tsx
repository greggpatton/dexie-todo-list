import { View, Text, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { db } from "../models/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoItem } from "../models/TodoItem";

interface Props {
  item: TodoItem;
}

export function TodoItemView({ item }: Props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ paddingEnd: 10 }}>
        <Checkbox
          value={item.done}
          onValueChange={(newValue) =>
            db.todoItems.update(item, {
              done: newValue,
            })
          }
        />
      </View>
      <View style={{ flex: 8 }}>
        <Text>{item.title}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable
          onPress={() => {
            if (item.id !== undefined) {
              db.todoItems.delete(Number(item.id));
            } else {
              console.error("Item ID is undefined");
            }
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Pressable>
      </View>
    </View>
  );
}

// import * as React from "react";
// import { db } from "../models/db";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import TodoItem from "../models/TodoItem";

// interface Props {
//   item: TodoItem;
// }

// export function TodoItemView({ item }: Props) {
//   return (
//     <div className={"row " + (item.done ? "done" : "")}>
//       <div className="narrow">
//         <input
//           type="checkbox"
//           checked={!!item.done}
//           onChange={(ev) =>
//             db.todoItems.update(item, {
//               done: ev.target.checked,
//             })
//           }
//         />
//       </div>
//       <div className="todo-item-text">{item.title}</div>
//       <div className="todo-item-trash">
//         <a
//           onClick={() => {
//             if (item.id !== undefined) {
//               db.todoItems.delete(Number(item.id));
//             } else {
//               console.error("Item ID is undefined");
//             }
//           }}
//           title="Delete item"
//         >
//           <FontAwesomeIcon icon={faTrash} />
//         </a>
//       </div>
//     </div>
//   );
// }
