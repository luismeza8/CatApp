import Navbar from './components/Navbar';
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import Card from './components/Card';
import CardBody from './components/CardBody'
import { useEffect, useState } from 'react';


function App() {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=28";
      try {
        const response = await fetch(url, {headers: {
          'x-api-key': import.meta.env.VITE_API_KEY
        }});

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        dataSet(json);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#1e1e2e]">
      <div className='h-[10%] pl-5 pt-5'>
        <div className='absolute bg-[#89b4fa] h-[5%] w-[calc(100%-2.5rem)] top-12 left-10 rounded-l-3xl'></div>
        <Navbar className='absolute' />
      </div>

      <div className="flex h-[90%]">
        <div className='pr-8 py-8'>
          <Sidebar />
        </div>
        <div className='flex pt-4 pr-8'>
          <Body>
            <div className='flex flex-wrap justify-evenly items-center'>
              {data.map((cat, index) => (
                <Card className='max-w-[300px] h-auto w-auto rounded-3xl m-4' key={index} img={cat.url} alt="cat">
                  <CardBody id={cat.id}>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Body>
        </div>
      </div>
    </div>
  );
}

export default App
