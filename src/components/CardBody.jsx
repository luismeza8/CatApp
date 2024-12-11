import { useEffect, useState } from "react"

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


  return (
    <>
      <h3>{gato.breeds[0].name}</h3>
    </>
  )
}
