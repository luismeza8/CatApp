import Navbar from './components/Navbar';
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import ResultadoBusqueda from './components/ResultadoBusqueda'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#313244]">
      <div className='h-[10%] pl-5 pt-5'>
        <div className='absolute bg-[#89b4fa] h-[5%] w-[calc(100%-2.5rem)] top-12 left-10 rounded-l-3xl'></div>
        <Navbar className='absolute' />
      </div>

      <div className="flex h-[90%]">
        <div className='pr-8 py-8'>
          <Sidebar />
        </div>
          <div className='flex pt-4 pr-8 w-full'>
            <Body>
              <div className='flex flex-wrap justify-evenly items-center'>
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/yeap' element={<ResultadoBusqueda />}/>
                </Routes>
              </div>
            </Body>
          </div>
      </div>
    </div>
  );
}

export default App
