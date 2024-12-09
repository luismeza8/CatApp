import { useEffect, useState } from "react"

function Body() {
  const [data, dataSet] = useState([])

  useEffect(() => {
    (async () => {
      const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        console.log(json)
        dataSet(json)
        return json
      } catch(error) {
        console.error(error.message)
      }
    })();
  }, [])

  return(
    <>
      <div className='h-full w-full bg-gray-500 mb-4'>
        {data.map((cat) => (
          <div>
            <img key={cat.id} src={cat.url} width={100}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Body
