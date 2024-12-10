import Navbar from './components/Navbar';
import Body from './components/Body'
import Sidebar from './components/Sidebar'
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://api.thecatapi.com/v1/images/search?limit=10";
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
      <Navbar />

      <div className="p-4 flex flex-1 overflow-hidden">
        <Sidebar />
        <Body>
          <div className='flex flex-wrap'>
            {data.map((cat, index) => (
              <Card key={index} img={cat.url} alt="cat" />
            ))}
          </div>
        </Body>
      </div>
    </div>
  );
}

export default App
