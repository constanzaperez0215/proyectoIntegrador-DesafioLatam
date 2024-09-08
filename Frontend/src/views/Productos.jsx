import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { Star, StarFill } from 'react-bootstrap-icons'
// import { ENDPOINT } from '../config/constantes.jsx'
import ProductoFiltro from '../components/ProductoFiltro.jsx'
import { ProductContext } from '../context/ProductContext.jsx'
import UserContext from '../context/UserContext.jsx'
// import { registrarUsuario } from '../../../Backend/src/models/models.user.js'

const Productos = () => {
  const { addProduct, addFavorite, borrarProduct, productos, getData, filtro, setFiltro } = useContext(ProductContext)
  const navigate = useNavigate()
  // const [filtro, setFiltro] = useState('')

  console.log(productos)

  useEffect(() => {
    getData()
    // fetch('http://localhost:3000/productos')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setProductos(data.rows || [])
    //   })
    //   .catch(error => console.error('Error fetching data:', error))
  }, [])

  const { getNuevoUsuario } = useContext(UserContext)

  const handleFiltroChange = (texto) => {
    setFiltro(texto)
  }

  const productosFiltrados = productos.filter(card =>
    card.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    card.descripcion.toLowerCase().includes(filtro.toLowerCase())
  )

  const botones = (card) => {
    if (!getNuevoUsuario || !getNuevoUsuario.is_admin) {
      return (
        <>
          <Button variant='info' onClick={() => navigate(`/productos/${card.id}`)}>Ver Detalle</Button>
          <Button variant='secondary' onClick={() => addProduct(card)}>Agregar</Button>
        </>
      )
    } else {
      return (
        <>
          <Button variant='info' onClick={() => navigate(`/productos/${card.id}`)}>Ver Detalle</Button>
          <Button>editar</Button>
          <Button variant='danger' onClick={() => borrarProduct(card.id)}>borrar</Button>
        </>
      )
    }
  }

  return (
    <Container fluid className='mb-5'>
      <Row className='fluid text-center mt-2 mb-2 justify-content-center'>
        <h1>- BICICLETAS -</h1>
      </Row>
      <ProductoFiltro onFiltroChange={handleFiltroChange} />
      <Row>
        {productosFiltrados.map((card) => (
          <Container className='col-md-3 p-3' key={card.id}>
            <Card>

              {!card.favorite ? <Star color='gray' size={30} onClick={() => addFavorite(card.id)} /> : <StarFill color='gray' size={30} onClick={() => addFavorite(card.id)} />}
              <Card.Img variant='top' className='img-fluid' src={card.img} />S
              <Card.Body>
                <Card.Title>{card.nombre}</Card.Title>
                <hr />
                <Card.Text>{card.descripcion}</Card.Text>
                <Card.Text>Precio: {card.precio}</Card.Text>

                <div>{botones(card)}</div>

              </Card.Body>
            </Card>
          </Container>
        ))}
      </Row>
    </Container>
  )
}

export default Productos
