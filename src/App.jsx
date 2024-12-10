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
      const url = "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=10";
      try {
        const response = await fetch(url);

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
    <div className="h-screen flex flex-col">
      <div className='pl-5 pt-5'>
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className='h-3/4 pr-6 pt-6 pb-6'>
          <Sidebar />
        </div>
          <Body>
            <div className='p-4 flex flex-wrap justify-evenly'>
              {data.map((cat, index) => (
                <Card className='max-w-[300px] h-auto w-auto rounded-2xl m-4' key={index} img={cat.url} alt="cat">
                  <CardBody id={cat.id}>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Body>
      </div>
    </div>
  );
}

export default App
