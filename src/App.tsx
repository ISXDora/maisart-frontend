import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './hooks';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ModalProvider } from  'react-brave-modal';


function App() {

  
  return (
    <AppProvider >
        <GlobalStyle/>
        <Router >
          <ModalProvider>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </ModalProvider>
      </Router>
    </AppProvider>
  );
}




export default App;