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

### Bun commands 
- bunx expo install @react-native-async-storage/async-storage
- bunx expo install expo-secure-store
- bunx expo install expo-sqlite
### react concepts 
- useCallback , useMemo 