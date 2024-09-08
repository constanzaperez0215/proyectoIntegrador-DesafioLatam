import request from 'supertest'
import server from '../server/app.js'

describe('CRUD', () => {
  test('[GET /users] devuelve 200 status de consulta users', async () => {
    const res = await request(server).get('/users')
    expect(res.status).toBe(200)
  })
})

describe('CRUD', () => {
  test('[PUT /users/:id] actualiza un usuario y devuelve 200 status', async () => {
    const userId = '1' // Asegúrate de que este ID exista en tu base de datos
    const updatedUser = {
      name: 'Juan Pérez Actualizado'
    };

    const res = await request(server)
      .put(`/users/${userId}`)
      .send(updatedUser)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('name', updatedUser.name)
  });
});