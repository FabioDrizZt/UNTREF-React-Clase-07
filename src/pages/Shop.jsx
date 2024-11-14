import { Link, Outlet } from 'react-router-dom'

export default function Shop ({ data }) {
  return (
    <ul>
      <Outlet />
      {data.map(item =>
        <Link to={item.id} key={item.id}>{item.title}</Link>
      )}
    </ul>
  )
}
