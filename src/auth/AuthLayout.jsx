import React from 'react';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

function AuthLayout() {
  return (
    <div className='d-flex layout'>
      <div className='w-50'>
        <img
          src="https://cdn.designbump.com/wp-content/uploads/2021/01/quench-responsive-web-design-laptop-mockup.2.jpg"
          className='img-fluid rounded-5 h-100'
          alt="img"
        />
      </div>
      <div className='w-50'>
        <SignUpForm />
      </div>
    </div>
  );
}

export default AuthLayout;
