import { useParams } from 'react-router-dom'

export default function Card ({ data }) {
  const params = useParams()
  const result = data?.find(item => item.id === params.id)

  return (
    <div>
      <h2>{result?.title}</h2>
      <img src={result?.thumbnail} alt={`Imagen de ${result?.title}`} />
    </div>
  )
}
