
import './App.css'
import Form from './components/Login.tsx'
import './styles/global.css'
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup.tsx';
import View from './components/ViewLinks.tsx'



function App() {
 

  return (
    <>
    <Routes>  
      <Route         
      index
      element =  {<Form label={''} placeholder={''} />}
     />
     <Route
     path = "Signup"
     element = {<Signup placeholder={''} input={''} />}
     />

    <Route
     path = "ViewLinks"
     element = {<View />}
     />

     </Routes> 

    </>
  )
}

export default App
