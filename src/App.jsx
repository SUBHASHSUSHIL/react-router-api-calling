import { useEffect, useState } from "react"
import "./App.css"


function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData()
  }, [])

  async function getUsersData(){
    const url = "https://dummyjson.com/users"
    const response = await fetch(url)
    const data = await response.json()
    
    setUsersData(data.users)
  }

  console.log(usersData);

  return (
    <>
      <div>API Calling Example</div>
      <ul className="user-list-header">
            <li>Firstname</li>
            <li>Lastname</li>
          </ul>
      {
         usersData && usersData.map((user) => (
          <ul key={user.id} className="user-list">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App

