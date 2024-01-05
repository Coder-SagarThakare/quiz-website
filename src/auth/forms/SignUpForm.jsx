import React from 'react'

function SignUpForm() {
  return (
    <div>
        <h2>Sign Up</h2>
        <form>
            <div>
                <label htmlFor="">Email address </label>
                <input type="email" name="email" id="email" />
            </div>
            
            <div>
                <label htmlFor="username">User name </label>
                <input type="text" name='username'/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />
            </div>

            <div>
                <button>Sign Up</button>
            </div>

             
        </form>
    </div>
  )
}

export default SignUpForm