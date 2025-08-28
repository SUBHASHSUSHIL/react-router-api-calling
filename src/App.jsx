import { useEffect, useState } from "react"
import "./App.css"


function App() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getUsersData()
  }, [])


  const getUsersData = async () => {
    const url = "http://localhost:3000/users"
    let response = await fetch(url)
    response = await response.json()
    console.log(response);
    setUsersData(response);
    setLoading(false);
  }
  

  return (
    <>
      <div>API Calling Example</div>
      <ul className="user-list-header">
        <li>Id</li>
        <li>Name</li>
        <li>Email</li>
      </ul>
      {
        !loading ? usersData && usersData.map((user) => (
          <ul key={user.id} className="user-list">
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        )) : <div>Loading...</div>
      }
    </>
  )
}

export default App

