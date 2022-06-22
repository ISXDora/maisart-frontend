import styled from "styled-components";

export const Header = styled.div`
    color: white;
    border-radius:95px 2px 2px;
    backdrop-filter: blur(5px);
    background-color: rgba(0,255,157, 0.4);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 1px rgba(255,255,255,0.4) solid;
    opacity: 0.8;
height: 200px;
width: 100%;
position: relative;

div {
  width: 200px;
  height: 200px;
  background: #D9d9d9;
  border-radius: 50%;
  position: absolute;
  top:9rem;
  left: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: deeppink;
  border: 2px dashed deeppink;
}
`

export const ProfileEdit = styled.div`
max-width: 100%;
margin-left: 280px;
margin-top: 10px;;
display: flex;
align-items: center;
justify-content: space-between;
 button{
  background-color: lightgreen;
padding: 0.5rem 0.5rem;
width: 200px;
height: 42px;
border-radius: 6px;
color: deeppink;
font-weight: 600;
font-size: 1rem;
cursor: pointer;
margin: 10px
 }
`
export const Links = styled.div`
 width: 500px;
    height: 375px;
    color: deeppink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(0,255,157, 0.438);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 1px rgba(255,255,255,0.4) solid;
    border-bottom: 1px rgba(40,40,40,0.35) solid;
    border-right: 1px rgba(40,40,40,0.35) solid;
    margin: 100px 15px;
    p{
      background-color: white;
      padding: 10px;
      width: 90%;
      font-size:large;
    }
`