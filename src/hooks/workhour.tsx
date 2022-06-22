import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { api } from "../services/api";
import { useUser } from "./user";

interface WorkHour {
  id?: number;
  compensation: number;
  workingHoursPerDay: number;
  workingDaysPerWeek: number;
  hourly_rate?: number;
  user_id?: number;
}

interface WorkHourContextData {
    createWorkHour: (workHour: WorkHour) => Promise<void>;
    workHour?: WorkHour;
    valueHour?: WorkHour;

    }
  type WorkHourProviderProps = {
      children: React.ReactNode;
  }

const WorkHourContext = createContext<WorkHourContextData>({}as WorkHourContextData)

export const WorkHourProvider =({children}: WorkHourProviderProps) =>{
    const [workHour, setWorkHour] = useState<WorkHour>();
    const [valueHour, setValueHour] = useState<WorkHour>()
    const {user} = useUser();
    
    const createWorkHour = useCallback( async (workHourData: WorkHour)=>{

      if(user && user.id){

        const workHour = {
            compensation: workHourData.compensation,
            working_days_per_week: workHourData.workingDaysPerWeek,
            working_hours_per_day: workHourData.workingHoursPerDay,
            user_id: user.id,
  
        }
        const newWorkHour = await api.post<WorkHour>("/work_hours", workHour);
    
        
        if(newWorkHour){
            setWorkHour(newWorkHour.data);
        } 
      }
  
  
  
  },[setWorkHour])

//   const updateWorkHour = useCallback( async (workHourData: WorkHour)=>{

//     const data = {
//         hourly_rate: workHourData.compensation / (workHourData.workingDaysPerWeek * workHourData.workingDaysPerWeek * 4.3)   }
//     const newHourlyrate = await api.put<WorkHour>(`/work_hours/${workHourData.id}`, data);

    
//     if(newHourlyrate){
//         setValueHour(newHourlyrate.data);
//     } 


// },[workHour, setValueHour])


  
     return (
        <WorkHourContext.Provider value={{createWorkHour, workHour, valueHour}}>
        {children}
        </WorkHourContext.Provider>    
    );
};

export const useWorkHour = ():WorkHourContextData => {

    const context=useContext(WorkHourContext)
    if(!context){
        throw new Error('WorkHourContext precisa ser usado dentro do UserProvider')
    }
    return context;
}