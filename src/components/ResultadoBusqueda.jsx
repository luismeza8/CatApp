import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ResultadoBusqueda() {
  const [data, dataSet] = useState([]);
  
  const { id } = useParams();

  const fetchData = async () => {
    if (!id) return;

    const abortController = new AbortController()
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${id}`;

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
      return () => abortController.abort()
    }
  };

  useEffect(() => {fetchData();}, [id])

  return (
    <>
      {data.map((foto) => {
        return (<img key={foto.id} src={foto.url}/>)
      })}
    </>
  )
}
