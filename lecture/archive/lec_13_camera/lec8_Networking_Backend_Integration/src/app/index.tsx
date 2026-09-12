import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";

export default function Index() {
  const [output, setOutput] = useState<string>("");
  const [lastMethod, setLastMethod] = useState<string>("");
  async function callApi(label: string, url: string, options?: RequestInit) {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setOutput(`${label} : ${JSON.stringify(data, null, 2)}`);
      setLastMethod(label);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callApi("GET /api/users", "/api/users");
  }, []);

  // 3rd party api call
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        // const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // const res = {"data": {"currentPageItems": 10, "data": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "limit": 10, "nextPage": true, "page": 1, "previousPage": false, "totalItems": 500, "totalPages": 50}, "message": "Random users fetched successfully", "statusCode": 200, "success": true}
        // const json = await res.json();
        // setData(json);
        // console.log("data",json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

      <Button
        title="GET /api/users/1"
        onPress={() => callApi("GET /api/users/1",
          "/api/users/1")}
      />
      <Button
        title="GET /api/users/   ( get all users ) "
        onPress={() => callApi("GET /api/users", "/api/users")}
        // onPress={() => callApi("GET /api/users/null", "/api/users/null")}     // WORKS 
      />
      <Button
        title="POST /api/users"
        onPress={() =>
          callApi("POST /api/users", "/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "John Doe",
              email: "test@example.com",
              password: "pass123",
            }),
          })
        }
      />

      {/* Last command run was "GET /api/users" */}
      <Text>Last command run was "{lastMethod}"</Text>
      

      <ScrollView>
        {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
        <Text>{output}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
