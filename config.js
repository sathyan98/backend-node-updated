const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'stn',
  port: 5432,
})

  const getUsers = (request, response) => {
    pool.query('SELECT * FROM actor ORDER BY actor_id ASC', (error, results) => {
      if (error) {
        throw error
      }
       
      response.send('received a get method').json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User added with ID: ${id}`)
    })
  }
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  module.exports = {
    getUsers,
    createUser,
    updateUser,
  }