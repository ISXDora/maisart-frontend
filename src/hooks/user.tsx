import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

interface User {
    name: string;
    email: string;
    id?: number;
    birthDate?: Date;
    cpf?: string;
}

interface UserContextData {
    createUser: (user:User) => Promise<void>;
    user?: User;
    createStudio: (studio:Studio) => Promise<void>;
    studio?: Studio;

}

  interface Studio {
    id?: Number;
    studioName: string;
    cnpj?: string;
    user_id: number | undefined;
  
  }

  type UserProviderProps = {
      children: React.ReactNode;
  }

const UserContext = createContext<UserContextData>({}as UserContextData)

export const UserProvider =({children}: UserProviderProps) =>{
    const [user, setUser] = useState<User>();
    const [studio, setStudio] = useState<Studio>();

    
    const createUser = useCallback( async (userData: User)=>{
  
      const user = {
          name: userData.name,
          email: userData.email,
          birthDate: userData.birthDate, 
          cpf: userData.cpf  
      }
      const newUser = await api.post<User>("/users", user);
  
      
      if(newUser){
          setUser(newUser.data);
      } 
  
  
  },[])

  const createStudio = useCallback( async (studioData: Studio)=>{

    const studio = {
        name: studioData.studioName,
        cnpj: studioData.cnpj,
        user_id: user?.id
    }
    const newStudio = await api.post<Studio>("/studios", studio);

    
    if(newStudio){
        setStudio(newStudio.data);
    } 


},[user])


    return (
        <UserContext.Provider value={{createUser, user, createStudio, studio}}>
        {children}
        </UserContext.Provider>    
    );
};

export const useUser = ():UserContextData => {

    const context=useContext(UserContext)
    if(!context){
        throw new Error('useUser precisa ser usado dentro do UserProvider')
    }
    return context;
}