import { useEffect, useState } from "react";
import Card from './Card'
import CardBody from './CardBody'

export default function Home() {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=12";
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

  return(
    <>
      {!data.length ? <h1 className='text-3xl font-extrabold m-8 text-[#1e1e2e]'>Loading...</h1> : data.map((cat, index) => (
        <Card className='max-w-[300px] h-auto w-auto rounded-3xl m-4' key={index} img={cat.url} alt="cat">
          <CardBody id={cat.id}>
          </CardBody>
        </Card>
      ))}

    </>
  )
}
