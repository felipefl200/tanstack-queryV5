const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Usando os middlewares padrões do json-server
server.use(middlewares)

// Middleware para adicionar um delay de 5 segundos
server.use((req, res, next) => {
  console.log('Delay de 2 segundos')

  setTimeout(() => {
    next()
  }, 2000) // 2000 milissegundos = 2 segundos
})

// Usando o roteador do json-server
server.use(router)

const PORT = 8000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
