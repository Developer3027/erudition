import { useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Your passwords do not match');
    }
  };
  return (
    <>
      <div className='container-fluid py-5 mb-2 bg-primary main-gradient'>
        <h1 className='display-5 text-center text-white'>Register</h1>
      </div>
      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            required
            className='form-control mb-4 p-3'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            required
            className='form-control mb-4 p-3'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            required
            className='form-control mb-4 p-3'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='confirmPassword'
            required
            className='form-control mb-4 p-3'
            placeholder='Please confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className='d-grid'>
            <button type='submit' className='p-4 mb-4 btn btn-primary'>
              Submit
            </button>
          </div>
          <p>
            Already have an account? Login{' '}
            <Link href='/login'>
              <a>here</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
