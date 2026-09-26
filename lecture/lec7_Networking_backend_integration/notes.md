### Start : Sep 19

## ERROR

1.  LOG Error

{"code": "42501", "details": null, "hint": null, "message": "new row violates row-level security policy for table \"users\""}

<code> const addUserSupabase = async () => {
try {
console.log("addUserSupabase called", times);
setOutput("Loading...");
const { data, error } = await supabase.from("users").insert({
id: 2,
created_at: new Date().toISOString(),
user_name: "Test User",
user_email: "test@example2.com",
password: "testPassword",

      });
      if (error) throw error;
      console.log("Data \n\n",data);
      setOutput(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log("Error \n\n",error);
      setOutput(String(error));
    }

}; </code>


- Solution : Go to database -> Access Control -> Policies -> create policy 

Topic : Networking & backend integration
command

- bun expo install @react-native-async-storage/async-storage
- bun expo install @supabase/supabase-js

- expo install @supabase/supabase-js react-native-url-polyfill expo-sqlite 

expo

- UI + routing
- backend routes though not as much control as other option

Q API ??
application programming interface

types ??

- REST api : representational state transfer

- request response cycle

http METHOD

- GET
- POST :
- PUT : update all
- PATCH : update partial
- DELETE :

#### free api : freeapi.net to get mock data from api

#### Expo API routes

- file naming convention : file-name+api.ts

- Avoid traditional MYSQL/Postgress with long lived connection pools API routes can be serverless and connection wont persist between Request. Use HTTP - native or serverless friendly drivers.
- cuz expo api routes are based on serverless (edge) architechture

So DB that are serverless friendly to be used

1. Turso , Neon , Supabase , planetscale

#### Expo routes NOT reccommended for data insertion into DB and similar

best when calling 3rd party API

- PREFER to create a seperate backend
- Consider this only for Sensitive things related to app like authentication , JWT tokens
