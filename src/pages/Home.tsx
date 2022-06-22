import { useCallback} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldForm } from "../components/fields/Field";
import { Button, Container, Header } from "../styles/home";
import {createSearchParams, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/user'
import { UserData } from "../entities";


interface Inputs {
  name: string;
  studioName: string;
  email: string;
  user_id: UserData;
}


export function Home(){
  const {createUser, user, createStudio} = useUser()

   let navigate = useNavigate();

  const {  register, handleSubmit} = useForm <Inputs >();
  const onSubmit: SubmitHandler<Inputs> = async (data) =>{

      await createCraftsman(data)
    
    }
  const onSubmitStudio: SubmitHandler<Inputs> = async (data) =>{
    await createStudioFunc(data)
    let params = `{id: userId}`;
    navigate({pathname: '/Profile', search:`?${createSearchParams(params)}`})
    
  }
 

   const createCraftsman = useCallback( async (data: Inputs) => {
       await createUser(data)
       
   },[createUser])

   const createStudioFunc = useCallback( async (data: Inputs) => {
    await createStudio({
      studioName: data.studioName,
      user_id: Number(user?.id)
    })
},[createStudio, user])

  return (
    <>
    <Header>
    <h1>Mais Art</h1>
    <p>Sua calculadora de peças artesanais</p>
    </Header>
    <Container>

      {!!user ?
        <form onSubmit={handleSubmit(onSubmitStudio)}>
          <Button type='submit'>Enviar</Button>  
          <FieldForm
          name={'Nome do Ateliê:'}
          input={register('studioName')}
          />
        </form> 
        
      :

      <form onSubmit={handleSubmit(onSubmit)} >

        <FieldForm
        name={'Nome:'}
        input={register("name")}
        
        />
        <FieldForm
        name={'Email:'}
        input={register("email")}
        />
        <Button type='submit'>Próximo</Button>
      </form>
      }


    </Container>
    </>
  )
}

