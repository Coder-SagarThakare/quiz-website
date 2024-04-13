import React, { useEffect } from 'react'
import { apiPaths } from '../constants'
import { get } from '../services'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    get(apiPaths.STUDENT.SELF)
      .then((result) => {
        setUser(result)
        console.log(result);
      }).catch(() => { })
  }, [])

  return (
    <div>
      <img src={user.picture}/>
      <p>Name : {user.name}</p>
      <p>Bio : {user.bio}</p>
      <p>Email verified : {user.isEmailVerified ? "yes" : "no"}</p>
      <p></p>
    </div>
  )
}

export default Profile