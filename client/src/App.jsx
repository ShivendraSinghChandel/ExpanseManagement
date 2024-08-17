import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';  
import Home from "./Components/Home";
import Dashboard from './Components/Dashboard';
import Earning from './Components/Earning';
import DisplayEarning from './Components/DisplayEarning';
import Expanse from './Components/Expanse';
import DisplayExpenses from './Components/DisplayExpanses';
import UserReport from './Components/UserReport';
const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}  />
         </Routes>
         <Routes>
            <Route path='dashboard' element={<Dashboard/>}>
            <Route path='earning' element={<Earning/>}/>
            <Route path='expanse' element={<Expanse/>}/>
            <Route path='displayern' element={<DisplayEarning/>}/>
            <Route path='displayexpa' element={<DisplayExpenses/>}/>
            <Route path='userreport' element={<UserReport/>}/>

            </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;