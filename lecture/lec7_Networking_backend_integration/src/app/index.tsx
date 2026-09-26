import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [output, setOutput] = useState("Loading...");
  const [times, setTimes] = useState(1);


  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'valid.email@supabase.io',
      password: 'example-password',
    })
    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('Signed in successfully:', data);
    }
  }


  const testSupabase = async () => {
    try {
      console.log("testSupabase called", times);
      setOutput("Loading...");
      // const { data, error } = await supabase.from("users").select("user_name, user_email").eq("id", 1);
      // const { data, error } = await supabase.from("users").select("WHERE id = 1");
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw error;
      console.log(data);
      setOutput(JSON.stringify(data, null, 2));
    } catch (error) {
      setOutput(String(error));
    }
  };

  useEffect(() => {
    testSupabase();
  }, []);

  const addUserSupabase = async () => {
    try {
      console.log("addUserSupabase called", times);
      setOutput("Loading...");
      const { data, error } = await supabase.from("users").insert({
        id: 3,
        created_at: new Date().toISOString(),
        user_name: "Test User",
        user_email: "test@example2.com",
        password: "testPassword",
      });
      if (error) throw error;
      console.log("Data \n\n", data);
      setOutput(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log("Error \n\n", error);
      setOutput(String(error));
    }
  };
  async function testApi() {
    // const times = 1;
    try {
      console.log("testApi called", times);
      setOutput("Loading...");
      const res = await fetch("/api/users");
      // const data = await res.json();/
      // console.log(data);
      // setOutput(JSON.stringify(data, null, 2));
    } catch (error) {
      setOutput(String(error));
    }
  }
  async function callApi(label: string, url: string, options?: RequestInit) {
    console.log("LABEL", label, "\nURL", url, "\nOPTIONS", options);
    setOutput(`${label}\n\nLoading...`);
    try {
      // const res = await fetch(url, options);
      const res = await fetch(url);
      // const data = await res.json();
      console.log("RES \n\n", res);
      // setOutput(`${label}\n\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setOutput(`${label}\n\n${String(error)}`);
    }
  }

  useEffect(() => {
    callApi("GET /api/users", "/api/users/");
  }, []);


  return (
    <View style={styles.container}>
      <Button
        title="GET /api/users"
        onPress={() => callApi("GET /api/users", "/api/users")}
      />
      <Button
        title="POST /api/users"
        onPress={() =>
          callApi("POST /api/users", "/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Test User",
              email: "test@example2.com",
            }),
          })
        }
      />
      <Button
        title="GET /api/users/1"
        onPress={() => callApi("GET /api/users/1", "/api/users/1")}
      />
      <Button onPress={() => testSupabase()} title="Test Supabase" />
      <Button onPress={() => addUserSupabase()} title="Add User Supabase" />
      <Button onPress={() => signInWithEmail()} title="Sign In With Email" />
      <ScrollView style={styles.output}>
        <Text>{output}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    gap: 8,
  },
  output: {
    flex: 1,
    marginTop: 16,
  },
});
