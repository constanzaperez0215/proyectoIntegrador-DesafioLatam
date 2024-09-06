import jwt from 'jsonwebtoken'

const JWT_KEY = process.env.JWT_KEY

export const jwtSign = (payload) => jwt.sign(payload, JWT_KEY, { expiresIn: '1h' })

export const jwtDecode = (token) => jwt.decode(token, JWT_KEY)

export const jwtVerify = (token) => jwt.verify(token, JWT_KEY)
