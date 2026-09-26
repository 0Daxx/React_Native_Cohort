import * as SQLite from "expo-sqlite";
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const db = SQLite.openDatabaseAsync("todo.db");

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

type SubTask = {
  todoId: string;
  id: number;
  title: string;
  completed: boolean;
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


  const createTable = async () => {
    try {
      (await db).execAsync("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER , deadline TEXT, priority TEXT, notes TEXT);");
      console.log("Table created successfully");
    } catch (error) {
      console.error("Error creating table:", error);
    }
  };

  const createSubTaskTable = async () => {
    try {
      await (await db).runAsync("CREATE TABLE IF NOT EXISTS subtasks (id INTEGER PRIMARY KEY AUTOINCREMENT, todoId INTEGER, title TEXT, completed INTEGER , FOREIGN KEY (todoId) REFERENCES todos(id));");
      console.log("Subtask table created successfully");
    } catch (error) {
      console.error("Error creating subtask table:", error);
    }
  };

  const insertTodo = async (title: string) => {
    try {
      // PRAGMA journal_mode = WAL;
      (await db).runAsync(`
        INSERT INTO todos (title, completed  , deadline, priority, notes) VALUES (?, ?, ?, ?, ?);`, [title, 0, newDeadline, newPriority, newNotes]);
      console.log("Todo inserted successfully");
      // getTodos();
    } catch (error) {
      console.error("Error inserting todo:", error);
    }
  };

  const getTodos = async () => {
    try {
      const allRows = (await db).getAllAsync("SELECT * FROM todos;");
      console.log(allRows);
      console.log(allRows.then((result) => {
        // console.log(result[0].rows._array);
      }));
      // const result = await allRows;
      // setTodos(result[0].rows._array);
      setOutput(JSON.stringify(allRows));
      
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
      <Button title="Create SubTask Table" onPress={createSubTaskTable} />
      <Button title="Insert Todo" onPress={() => insertTodo("New Todo")} />
      <Button title="Get Todos" onPress={getTodos} />
      {/* <Button title="Get Todos" onPress={async () => {
        const result = await (await db).execAsync("SELECT * FROM todos;");
        setTodos(result[0].rows._array);
      }} /> */}
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
