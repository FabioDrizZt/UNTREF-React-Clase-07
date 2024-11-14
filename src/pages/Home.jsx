import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home () {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>Bienvenido a mi eCommerce</h1>
        <p style={styles.description}>
          Explora nuestra amplia selección de productos.
        </p>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  description: {
    fontSize: '16px'
  }
}
