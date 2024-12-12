import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from './Card' 

export default function ResultadoBusqueda() {
  const [data, dataSet] = useState([]);
  
  const { id } = useParams();

  const fetchData = async () => {
    if (!id) return;

    const abortController = new AbortController()
    const url = `https://api.thecatapi.com/v1/images/search?limit=25&breed_id=${id}`;

    try {
      const response = await fetch(url, {headers: {
        'x-api-key': import.meta.env.VITE_API_KEY
      }, 
        signal: abortController.signal
      });

      if (!response.ok) {
        throw new Error(`Status del resultado de la busqueda ${response.status}`)
      }

      const json = await response.json()
      dataSet(json)
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.error('Error en la busqueda', e.message);
      }
      console.error('Error en la busqueda', e.message)
    } finally {
      console.log(data)
      return () => abortController.abort()
    }
  };

  useEffect(() => {fetchData();}, [id])

  const contenido = data.length ? <h1>{data[0].breeds[0].name}</h1> : 'cargando...'

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-3xl text-center m-8 font-extrabold'>{ contenido }</h1>
        <div className='flex flex-wrap justify-center'>
          {data.map((raza, index) => (
            <Card className='max-w-[300px] h-auto w-auto rounded-3xl m-4' key={index} img={raza.url} alt="cat">
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
