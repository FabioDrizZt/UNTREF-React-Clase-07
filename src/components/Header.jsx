import { Link, useNavigate } from 'react-router-dom'

export default function Header () {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <br />
      <img style={{ height: 200 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF0dIlJiLzDJxQhBun7mTaIXSVVlV7WBKFQ&s' alt='Banner Mercado Libre' />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>About</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/faqs'>Faqs</Link>
      </nav>
    </div>
  )
}
