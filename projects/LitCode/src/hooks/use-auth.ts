import {useAuthStore} from "@/state/auth-store";

export function useAuth(){
  const session = useAuthStore((state)=>state.session)
  const user = useAuthStore((state)=>state.user)
  const isLoading = useAuthStore((state)=>state.isLoading)
  const signOut = useAuthStore((state)=>state.signOut)

  return {
    session ,
    user , 
    isLoading ,
    signOut
  }

}

// zustand : makes code readable and maintainable, Alternatively if had used useContext and useReducer , then we would have to create a context and a provider and wrap the app with it , and then use the context in the components. But with zustand we can directly use the store in the components without any provider or context.