import React, { useEffect } from 'react'
import { apiPaths } from '../constants'
import { get } from '../services'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user, setUser } = useAuth();

  async function fetchUserData(){
    try{
      const data = await get(apiPaths.STUDENT.SELF)
      setUser(data)
      console.log(data);
    }catch(err){}
  }

  useEffect(() => {
    fetchUserData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>

      <img src={user.picture} alt={user.picture}/>
      <p>Name : {user.name}</p>
      <p>Bio : {user.bio}</p>
      <p>Email verified : {user.isEmailVerified ? "yes" : "no"}</p>
    </div>
  )
}

export default Profile