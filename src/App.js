import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import HomeSub from './Pages/HomeSub'
import HomeAssemblies from './Pages/HomeAssemblies'
function App() {
  return (
    <>
     <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/homesub' element={<HomeSub/>}/>
            <Route path='/homeassemblies' element={<HomeAssemblies/>}/>
        </Routes>
    </>
  );
}

export default App;
