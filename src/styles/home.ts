import styled from "styled-components";

export const Header = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem 0;
  h1{
    color: deeppink;
    text-shadow: 2px 2px 8px lightgreen;

  }
  p{
    color: gray;
    
  }
`
export const Container = styled.section`
margin: 0 auto;
align-items: center;
width: 100%;
max-width: 650px;

  form{
    padding: 0 1rem;;
  }

  button{
    display: block;
    margin: 0 auto;
    }
  
`
export const Button = styled.button`

background-color: lightgreen;
padding: 0.5rem 0.5rem;
width: 200px;
border-radius: 6px;
color: deeppink;
font-weight: 600;
font-size: 1rem;
cursor: pointer;
`
