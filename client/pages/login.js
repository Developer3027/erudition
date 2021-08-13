import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Your passwords do not match');
    }
  };
  return (
    <>
      <div className='container-fluid py-5 mb-2 bg-primary main-gradient'>
        <h1 className='display-5 text-center text-white'>Login</h1>
      </div>
      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            required
            className='form-control mb-2 p-3'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            required
            className='form-control mb-2 p-3'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='d-grid'>
            <button type='submit' className='p-4 mb-4 btn btn-primary'>
              Submit
            </button>
          </div>
          <p>
            Don't have an account? Register{' '}
            <Link href='/register'>
              <a>here</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
