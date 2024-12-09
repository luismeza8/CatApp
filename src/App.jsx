import Navbar from './components/Navbar';
import Body from './components/Body'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='h-full flex flex-col'>
      <Navbar />
      <div className='h-full flex box-border p-4'>
        <Sidebar></Sidebar>
        <Body />
      </div>
    </div>
  )
}

export default App
