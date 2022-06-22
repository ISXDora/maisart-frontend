// import {  useMemo } from 'react';
// import useQuery from '../hooks/query';
import { useModal } from 'react-brave-modal';
import { CalcWorkHours } from '../components/CalcWorkHour/CalcWorkHour';
import { StudioProvider } from '../hooks/studio';
import { useUser } from '../hooks/user';
import { Header, Links, ProfileEdit } from '../styles/profile';


export function Profile(){
  const {user, studio} = useUser();
  const { showModal } = useModal();
  console.log(studio)
  //  const query = useQuery();
  //  const id = useMemo<string | undefined>(() => {
  //    const resp = query.get('id') ?? undefined;
  //     return resp === 'undefined' ? undefined : resp;
  //  }, [query]);


  return(
  <>
  <Header>wenfsldkn
    <div>Sem foto</div>
  </Header>
  <ProfileEdit>
    <div>
    <h1>{user?.name}</h1>
    <h3>{studio?.name}</h3>

    </div>
    <button>Editar</button>
  </ProfileEdit>
  <Links>
    <p
    onClick={() => showModal(
      { 
        type:'custom',
        title: 'Calculando Hora de Trabalho',
        data: <CalcWorkHours/>
       
      }
    )
    }>
    Calcular hora de Trabalho
    </p>
    <p
    onClick={() => showModal(
      { 
        type:'simple', 
        title: 'Meu Título Bonitão', 
        text: 'Meu texto legal'
      }
    )
    }
    >Calcular Despesas Fixas</p>
    <p
     onClick={() => showModal(
      { 
        type:'simple', 
        title: 'Meu Título Bonitão', 
        text: 'Meu texto legal'
      }
    )
    }
    >Calcular Despesas Variáveis</p>
    <p
     onClick={() => showModal(
      { 
        type:'simple', 
        title: 'Meu Título Bonitão', 
        text: 'Meu texto legal'
      }
    )
    }
    >Cadastrar Produto</p>
  </Links>
  </>

  )
}