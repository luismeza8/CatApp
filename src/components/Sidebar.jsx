import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    (async () => {
      const url = `https://api.thecatapi.com/v1/breeds/`;
      const api_key = import.meta.env.VITE_API_KEY
      console.log('yeap;')

      try {
        const response = await fetch(url, {headers: {
          'x-api-key': api_key
        }})

        if (!response.ok) {
          throw new Error('respuesta de error en la consulta del sidebar ' + response.status)
        }

        const json = await response.json()
        setBreeds(json)
      } catch(e) {
        console.error('Error en la consulta del sidebar', e.message)
      }
    })();
  }, []);

  return(
    <>
      <div className='absolute bg-[#f5c2e7] w-56 h-[82%] bottom-4 left-4 rounded-3xl'></div>
      <ul className="h-full menu bg-[#cba6f7] rounded-r-3xl drop-shadow-xl w-56 overflow-y-auto">
        <div className='p-4'>
          <h1 className='mb-4 text-xl font-bold'>Razas</h1>
          {breeds.map((breed) => {
            return (
            <li className='text-[#11111b]' key={breed.name}>
              <Link to={`/yeap/${breed.id}`}>
                {breed.name}
              </Link>
            </li>
            ) 
          })}
        </div>
      </ul>
    </>
  )
}

export default Sidebar;
