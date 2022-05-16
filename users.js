// import React, { useState, useEffect,Text } from 'react'

// export const users=({navigation})=> {
//   const [Users, fetchUsers] = useState([])

//   const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res)
//         fetchUsers(res)
//       })
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <>
//       <Text>React Fetch API Example</Text>
//     <Text>
//         {Users.map((item, i) => {
//           return <li key={i}>{item.name}</li>
//         })}
//       </Text>

   
//     </>
//   )
// }