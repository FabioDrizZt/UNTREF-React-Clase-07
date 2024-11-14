import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchData () {
  const [data, setData] = useState([])
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

  useEffect(() => {
    axios(url)
      .then(res => setData(res.data.results))
      .catch(error => console.error(error))
  }, [url])

  return data
}
