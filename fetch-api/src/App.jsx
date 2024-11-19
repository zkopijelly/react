import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])

  console.log(todos, "new list of todos")

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        // console.log(response)

        const result = await response.json();
        
        // console.log("TODO LIST", result)

        if (response.ok) {
          console.log('Error fetching data')
        }

        setTodos(result)
      
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }

    fetchData()
  })

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)

        const result = await response.json();
        
        // console.log("TODO LIST", result)

        if (response.ok) {
          console.log('Error fetching data')
        }

        setUsers(result)
      
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }

    fetchData()
  })

  return (
    <>
      <h2>Fetch API</h2>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <ul>
              <li>{todo.title}</li>
            </ul>
          </div>
        ))
      }
      
      {
        users.map(user => (
          <div key={user.id}>
            <ul>
              <li>{user.name}</li>
            </ul>
          </div>
        ))
      }
    </>
  )
}

export default App
