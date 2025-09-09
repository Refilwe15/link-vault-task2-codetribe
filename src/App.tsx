
import './App.css'
import Form from './components/Login.tsx'
import './styles/global.css'
import {Route,Routes} from "react-router-dom";
import Signup from './components/Signup.tsx';



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
     element = {<Signup />}
     />

     </Routes> 

    </>
  )
}

export default App
