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

2. ERROR : 'FileSystemDirectory.create' has been rejected.
→ Caused by: Unable to create file or directory: it already exists 
Solution : // check if folder exists, if not create it
    if (!folder.exists ) {
      folder.create();
    } 
  
3.  ERROR  Error picking file: [Error: Call to function 'FileSystemFile.textSync' has been rejected.
→ Caused by: Missing 'READ' permission for accessing the file.] 

Code: FileSystem.tsx
  144 |             setOutput(`Picked file: ${fileName} (${fileType})`);
  145 |             console.log("Picked file:", fileUri);
> 146 |             console.log("File data \n\n\n ", file.textSync());

Solution : will learn getting file permission in the next lecture 

### timestamp 
1:40 Expo file system 

### Homework 
1. Find how cloud db like turso can be synced with local expo-sqlite db 
- push , pull mechanism 
2. Articles 
- How whatsapp work without internet 
- how instagram stores reel photos drafts 

Lecture Finished : 26 September 7:50 pm 