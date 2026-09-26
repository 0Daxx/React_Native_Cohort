## NOTES 
 
 
### AsyncStorage
-  is a local storage system for React Native and Expo application 
- stores in key value pair 
- Persist data even after App close , reload , device restart 
- WHEN : store user preference , login state , onboarding screen 


- setItem("isLogin","false") always store data in string 



### SecureStore 
- secure storage system provided by Expo for storing sensitive data safely inside mobile application 

- USECASE : store jwt token , access token , refresh token , api secret , sensitive user data 

TASK : chatbot with api secret , 


--> ios keychain : internal encrypted system for apple , storing cryptographic data 

### Expo SQLite (text data)
- Expo sqlite : large structure data 
- Offline first app 
- Searching / filter / sorting 
- relational data 
- scalable local first app 

- SQLite : lightweight local database used for storing structured data inside mobile application 

### Expo file system 
- module provided by Expo that allows us to interact with the devices local file system 

File System : create file , read file , write file , copy/move/delete files , upload file , download , folders manage 

1. File URI : every file has a path uri . using this uri operation like read , write , move , upload 
2. Sandbox : apps cannot access all device files directly . They work inside a protected area called sandbox 

3. Directories : 
- fileSystem.documentDirectory : permanent app storage  
  - stays until app delete them or app is uninstalled 

- fileSystem.cacheDirectory : temp storage , eventually deleted by device 


### Bun commands 
- bunx expo install @react-native-async-storage/async-storage
- bunx expo install expo-secure-store
- bunx expo install expo-sqlite
- bunx expo install expo-file-system 

### react concepts 
- useCallback , useMemo 

### Error 

1. forgot to add await when calling a async function leading to give the promise instead of data 

const allRows = await (db).getAllAsync("SELECT * FROM todos");
      setOutput(JSON.stringify(allRows));
      console.log("allRows:", allRows);

2. 


### timestamp 
1:40 Expo file system 

### Homework 
1. Find how cloud db like turso can be synced with local expo-sqlite db 
- push , pull mechanism 
2. 
