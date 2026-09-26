import * as SQLite from "expo-sqlite";
import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




type Todo = {
  id: number;
  title: string;
  completed: boolean;
  subTasks: SubTask[];
  deadline: string;
  priority: string;
  notes: string;
  createdAt?: string;
  updatedAt?: string;
};


const todo = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
      subTasks: [],
      deadline: "",
      priority: "",
      notes: "",
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
      subTasks: [],
      deadline: "",
      priority: "",
      notes: "",
    },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("new title");
  const [newSubTaskTitle, setNewSubTaskTitle] = useState<string>("");
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const [newDeadline, setNewDeadline] = useState<string>("18 dec 2023");
  const [newPriority, setNewPriority] = useState<string>("1");
  const [newNotes, setNewNotes] = useState<string>("hehe");
  const [output, setOutput] = useState<string | null>(null);

  let db: SQLite.SQLiteDatabase;
  let sql;
  // load the database
  useEffect(() => {
    const init = async () => {
      db = await SQLite.openDatabaseAsync("todo.db");
      sql = db.sql;
      // sql = db.execAsync("PRAGMA journal_mode = WAL;");
    };
    init();
  }, []);

  const createTable = async () => {
    try {
      (db).execAsync("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER , deadline TEXT, priority TEXT, notes TEXT);");
      console.log("Table created successfully");
    } catch (error) {
      console.error("Error creating table:", error);
    }
  };


  const insertTodo = async (title: string) => {
    try {
      // PRAGMA journal_mode = WAL;
      (db).runAsync(`
        INSERT INTO todos (title, completed  , deadline, priority, notes) VALUES ("title1", 0, "18 dec 2023", "1", "hehe");`,);
        // INSERT INTO todos (title, completed  , deadline, priority, notes) VALUES ("${title}", 0, "${newDeadline}", "${newPriority}", "${newNotes}");`,);
      // INSERT INTO todos (title, completed  , deadline, priority, notes) VALUES (?, ?, ?, ?, ?);`, title, 0, newDeadline, newPriority, newNotes);
      console.log("Todo inserted successfully");
      // getTodos();
    } catch (error) {
      console.error("Error inserting todo:", error);
    }
  };

  const getTodos = async () => {
    try {
      const allRows = (db).getAllAsync("SELECT * FROM todos");
      // const allRows = (db).getAllAsync("SELECT * FROM todos WHERE id = 1;");
      // const allRows = (db).getAllAsync("SELECT * FROM todos ");
      // console.log("allRows:", allRows.title)
      // const result = await allRows;
      // setTodos(result[0].rows._array);
      setOutput(JSON.stringify(allRows));
      console.log("allRows:", allRows);
      console.log("\n\n\n", JSON.stringify(allRows, null, 2));

    } catch (error) {
      console.error("Error getting todos:", error);
    }
  };

  // const TodoList

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OutPut : {output}</Text>

      {/* new todo */}
      <TextInput placeholder="New Todo" value={newTodoTitle} onChangeText={setNewTodoTitle} />
      <Button title="Create Table" onPress={createTable} />
      <Button title="Insert Todo" onPress={() => insertTodo("New Todo")} />
      <Button title="Get Todos" onPress={getTodos} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
            <Text>{item.title}</Text>
            <Text>Deadline: {item.deadline}</Text>
            <Text>Priority: {item.priority}</Text>
            <Text>Notes: {item.notes}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={{ padding: 10 }}>
            <Text>No todos available</Text>
          </View>
          // )}
        )}
      />
    </SafeAreaView>
  )
}

export default todo

const styles = StyleSheet.create({})
