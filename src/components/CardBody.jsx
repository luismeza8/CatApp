import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function CardBody({ id }) {
  const [gato, gatoSet] = useState({'id': '0', 'breeds': [{'name': ''}]})
  
  useEffect(() => {
    (async () => {
      const url =  `https://api.thecatapi.com/v1/images/${id}`

      try {
        const response = await fetch(url)

        if (!response.ok) {
          console.log('respuesta invalida')
        }

        const json = await response.json()
        gatoSet(json)
      } catch(e) {
        console.error('errorrrs', e.message)
      }
    })();
  }, []);


  return !gato.breeds[0].name ? 'Loading...' : (
    <>
      <h3 className='text-center mt-2 font-bold font-[#181825]'>
        <Link className='text-[#1e1e2e] hover:underline' to={`/search/${gato.breeds[0].id}`}>{gato.breeds[0].name}</Link>
      </h3>
    </>
  )
}
