import * as SQLite from "expo-sqlite";
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  // subTasks: SubTask[];
  deadline: string;
  priority: string;
  notes: string;
  createdAt?: string;
  updatedAt?: string;
};

const priorityMeta: Record<string, { label: string; color: string; bg: string }> = {
  "1": { label: "High", color: "#b42318", bg: "#fee4e2" },
  "2": { label: "Medium", color: "#b54708", bg: "#fef0c7" },
  "3": { label: "Low", color: "#027a48", bg: "#d1fadf" },
};

const getPriorityMeta = (priority: string) =>
  priorityMeta[String(priority)] ?? { label: "None", color: "#475467", bg: "#f2f4f7" };

const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
      // subTasks: [],
      deadline: "",
      priority: "",
      notes: "",
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
      // subTasks: [],
      deadline: "",
      priority: "",
      notes: "",
    },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newSubTaskTitle, setNewSubTaskTitle] = useState<string>("");
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  // const [newDeadline, setNewDeadline] = useState<string | Date>(Date.now().toString());
  const [newPriority, setNewPriority] = useState<string>("1");
  const [newNotes, setNewNotes] = useState<string>("");
  const [output, setOutput] = useState<string | null>(null);

  const dbRef = useRef<SQLite.SQLiteDatabase | null>(null);
  // load the database
  useEffect(() => {
    const init = async () => {
      dbRef.current = await SQLite.openDatabaseAsync("todo.db");
    };
    init();
  }, []);

  const createTable = async () => {
    try {
      await dbRef.current?.execAsync("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER , deadline TEXT, priority TEXT, notes TEXT);");
      console.log("Table created successfully");
      setOutput("Table created successfully");
    } catch (error) {
      console.error("Error creating table:", error);
      setOutput("Error creating table");
    }
  };

  const insertTodo = async (title: string) => {
    try {
      const deadline = new Date().toISOString();
      await dbRef.current?.runAsync(`
      INSERT INTO todos (title, completed  , deadline, priority, notes) VALUES (?, ?, ?, ?, ?);`, title, 0, deadline, newPriority, newNotes);
      console.log("Todo inserted successfully");
      setOutput(`Inserted "${title}"`);
      setNewTodoTitle("");
      setNewSubTaskTitle("");
      setNewPriority("1");
      setNewNotes("");
      
      await getTodos();
    } catch (error) {
      console.error("Error inserting todo:", error);
      setOutput("Error inserting todo");
    }
  };

  const getTodos = async () => {
    try {
      const allRows = (await dbRef.current?.getAllAsync("SELECT * FROM todos")) ?? [];
      setTodos(allRows as Todo[]);
      setOutput(JSON.stringify(allRows));
      console.log("allRows:", allRows);
      console.log("\n\n\n", JSON.stringify(allRows, null, 2));
    } catch (error) {
      console.error("Error getting todos:", error);
      setOutput("Error getting todos");
    }
  };

  // const TodoList
  const renderTodoItem = useCallback(({ item }: { item: Todo }) => {
    const meta = getPriorityMeta(item.priority);
    const isSelected = selectedTodoId === item.id;

    return (
      <Pressable
        onPress={() => setSelectedTodoId(isSelected ? null : item.id)}
        style={({ pressed }) => [
          styles.todoItem,
          isSelected && styles.todoItemSelected,
          pressed && styles.todoItemPressed,
        ]}
      >
        <View style={styles.todoItemHeader}>
          <View style={[styles.statusDot, item.completed && styles.statusDotDone]} />
          <Text
            style={[
              styles.todoTitle,
              item.completed && styles.todoTitleDone,
            ]}
            numberOfLines={1}
          >
            {item.title || "Untitled todo"}
          </Text>
          <View style={[styles.badge, { backgroundColor: meta.bg }]}>
            <Text style={[styles.badgeText, { color: meta.color }]}>
              {meta.label}
            </Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Deadline</Text>
            <Text style={styles.metaValue} numberOfLines={1}>
              {item.deadline || "—"}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Priority</Text>
            <Text style={styles.metaValue} numberOfLines={1}>
              {item.priority || "—"}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Status</Text>
            <Text style={styles.metaValue} numberOfLines={1}>
              {item.completed ? "Done" : "Open"}
            </Text>
          </View>
        </View>

        {item.notes ? (
          <Text style={styles.todoNotes} numberOfLines={2}>
            {item.notes}
          </Text>
        ) : null}
      </Pressable>
    );
  }, [selectedTodoId]);

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderTodoItem({ item })}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <View>
                <Text style={styles.headerTitle}>My Tasks</Text>
                <Text style={styles.headerSubtitle}>
                  {todos.length} total · {completedCount} completed
                </Text>
              </View>
              <View style={styles.headerBadge}>
                <Text style={styles.headerBadgeText}>
                  {todos.length - completedCount}
                </Text>
                <Text style={styles.headerBadgeLabel}>open</Text>
              </View>
            </View>

            {/* new todo */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Add a todo</Text>
              <TextInput
                style={styles.input}
                placeholder="What needs to be done?"
                placeholderTextColor="#98a2b3"
                value={newTodoTitle}
                onChangeText={setNewTodoTitle}
              />
              <TextInput
                style={[styles.input, styles.inputMultiline]}
                placeholder="Notes (optional)"
                placeholderTextColor="#98a2b3"
                value={newNotes}
                onChangeText={setNewNotes}
                multiline
                numberOfLines={3}
              />
              <TextInput
                style={styles.input}
                placeholder="Sub task (optional)"
                placeholderTextColor="#98a2b3"
                value={newSubTaskTitle}
                onChangeText={setNewSubTaskTitle}
              />
              <View style={styles.chipRow}>
                {Object.keys(priorityMeta).map((key) => {
                  const meta = priorityMeta[key];
                  const active = newPriority === key;
                  return (
                    <Pressable
                      key={key}
                      onPress={() => setNewPriority(key)}
                      style={[
                        styles.chip,
                        { backgroundColor: active ? meta.bg : "#f9fafb" },
                        active && { borderColor: meta.color },
                      ]}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          { color: active ? meta.color : "#667085" },
                        ]}
                      >
                        {meta.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <View style={styles.buttonRow}>
                <View style={styles.buttonSlot}>
                  <Button
                    title="Insert Todo"
                    color="#1570ef"
                    onPress={() => insertTodo(newTodoTitle || "New Todo")}
                  />
                </View>
                <View style={styles.buttonSlot}>
                  <Button
                    title="Get Todos"
                    color="#475467"
                    onPress={getTodos}
                  />
                </View>
              </View>
              <View style={styles.buttonSlotFull}>
                <Button
                  title="Create Table"
                  color="#027a48"
                  onPress={createTable}
                />
              </View>
            </View>

            <Text style={styles.sectionTitle}>Your list</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.outputCard}>
            <Text style={styles.outputLabel}>Output</Text>
            <Text style={styles.outputText} selectable>
              {output ?? "No output yet. Create the table, then insert and read todos."}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No todos available</Text>
            <Text style={styles.emptySubtitle}>
              Tap “Insert Todo” to add your first task.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
    gap: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#101828",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    marginTop: 2,
    fontSize: 14,
    color: "#667085",
  },
  headerBadge: {
    minWidth: 64,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: "#101828",
    alignItems: "center",
  },
  headerBadgeText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#ffffff",
  },
  headerBadgeLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#d0d5dd",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eaecf0",
    shadowColor: "#101828",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
    marginBottom: 12,
  },
  input: {
    height: 44,
    borderColor: "#e4e7ec",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#f9fafb",
    color: "#101828",
    fontSize: 15,
  },
  inputMultiline: {
    height: 72,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  chipRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e4e7ec",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  buttonSlot: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  buttonSlotFull: {
    overflow: "hidden",
    borderRadius: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#101828",
    marginTop: 8,
  },

  todoItem: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eaecf0",
  },
  todoItemSelected: {
    borderColor: "#1570ef",
    backgroundColor: "#f5f9ff",
  },
  todoItemPressed: {
    opacity: 0.75,
  },
  todoItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d0d5dd",
  },
  statusDotDone: {
    backgroundColor: "#12b76a",
  },
  todoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#101828",
  },
  todoTitleDone: {
    color: "#98a2b3",
    textDecorationLine: "line-through",
  },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  metaRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  metaItem: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  metaLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#98a2b3",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  metaValue: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "600",
    color: "#344054",
  },
  todoNotes: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
    color: "#667085",
  },

  empty: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#eaecf0",
    borderStyle: "dashed",
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#344054",
  },
  emptySubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#98a2b3",
  },

  outputCard: {
    marginTop: 4,
    backgroundColor: "#101828",
    borderRadius: 14,
    padding: 14,
  },
  outputLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#98a2b3",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  outputText: {
    color: "#d1fadf",
    fontSize: 12,
    lineHeight: 17,
  },
});
