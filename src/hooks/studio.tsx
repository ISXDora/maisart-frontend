import React, { createContext, useCallback, useContext, useState } from "react";
import { UserData } from "../entities";
import { api } from "../services/api";


interface StudioContextData {
  create: (studio:Studio, user_id: UserData) => Promise<void>;
  studio?: Studio;
}

interface Studio {
  id?: Number;
  name: string;
  cnpj?: string;
  user_id: Number;

}

const StudioContext = createContext<StudioContextData>({} as StudioContextData)


export const StudioProvider:React.FC<any> =({children})=>{
  const [studio, setStudio] = useState<Studio>();
  
  const create = useCallback( async (studioData: Studio)=>{

    const studio = {
        name: studioData.name,
        cnpj: studioData.cnpj,
        user_id: studioData.user_id
    }
    const newStudio = await api.post<Studio>("/studios", studio);

    
    if(newStudio){
        setStudio(newStudio.data);
    } 


},[])

  return (
      <StudioContext.Provider value={{create, studio}}>
      {children}
      </StudioContext.Provider>    
  );
};

export const useStudio = ():StudioContextData => {

  const context=useContext(StudioContext)
  if(!context){
      throw new Error('erro')
  }
  return context;
}