import { FieldForm } from "../fields/Field";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "./style";
import { useCallback, useEffect } from "react";
import { useUser } from "../../hooks/user";
import { useWorkHour } from "../../hooks/workhour";
import { useModal } from "react-brave-modal";
import { api } from "../../services/api";


type CalcWorkHoursProps = {

  id?: number;
  compensation: number;
  workingHoursPerDay: number;
  workingDaysPerWeek: number;
  hourly_rate?: number;
  user_id?: number | undefined;
}

export function CalcWorkHours(){
  const {user} = useUser()
  const {workHour, createWorkHour, valueHour} = useWorkHour();

  const {  register, handleSubmit} = useForm <CalcWorkHoursProps >();
  const onSubmit: SubmitHandler<CalcWorkHoursProps> = async (data) =>{
    
      console.log(user?.id)
      await createWorkHoursInputs(data)
    }

  const createWorkHoursInputs = useCallback( async (data: CalcWorkHoursProps) => {
    await createWorkHour({
      compensation: data.compensation,
      workingDaysPerWeek: data.workingDaysPerWeek,
      workingHoursPerDay: data.workingHoursPerDay,
      user_id: user?.id,
    })   
  },[createWorkHour, user, workHour])

  useEffect(() => {
    async function updateHourlyRate(data:CalcWorkHoursProps) => {
      const hourlyRate = {
        hourly_rate: data.compensation / (data.workingDaysPerWeek * data.workingHoursPerDay * 4.3)
      }
      await api.put('/work_hours', hourlyRate)
    }}, [workHour]);
    
    
  return (
    <Container>

    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldForm
        name={'Retirada Mensal:'}
        input={register("compensation")} 
      />
      <FieldForm
        name={'Dias trabalhados na semana:'}
        input={register("workingDaysPerWeek")} 
      />
      <FieldForm
        name={'Horas trabalhadas por dia:'}
        input={register("workingHoursPerDay")} 
      />
    <button type="submit">Salvar</button>
    </form>

    {workHour && <h3>R$</h3>}
    </Container>
  )
}