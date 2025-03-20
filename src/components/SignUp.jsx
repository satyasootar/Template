import { useState } from 'react';
import RandomIcon from "../Assets/Images/random-user-icon.svg"
const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const generateRandomUsername = () => {
    const randomString = Math.random().toString(36).slice(2, 6);
    const numbers = Math.floor(100 + Math.random() * 900);
    const namePart = `${firstName.slice(0, 2)}${lastName.slice(0, 2)}`.toLowerCase();
    const newUsername = `${namePart || 'user'}${randomString}${numbers}`;
    setUsername(newUsername.replace(/[^a-z0-9]/g, ''));
  };

  return (
    <div className="min-h-screen dark:bg-transparent  flex items-center justify-center p-4 transition-colors duration-300">
      <div className="relative w-full max-w-md dark:bg-black bg-white dark:bg-opacity-90 bg-opacity-90 rounded-xl shadow-2xl px-8 py-10 sm:px-10 sm:py-12 transition-colors duration-300">
        <div className="flex justify-center items-center mb-8">
          <p className="dark:text-white text-gray-900 text-2xl font-bold">Sign Up</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-transparent dark:text-white text-gray-900 border-b-2 dark:border-white border-gray-400 focus:border-blue-500 outline-none py-2 peer transition-colors"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
               id='fname'
              />
              <label className="absolute left-0 top-2 dark:text-white text-gray-400 transition-all duration-200 
                peer-focus:-translate-y-5 peer-focus:text-sm
                peer-valid:-translate-y-5 peer-valid:text-sm" htmlFor='fname'  >
                First Name
              </label>
              
            </div>

            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-transparent dark:text-white text-gray-900 border-b-2 dark:border-white border-gray-400 focus:border-blue-500 outline-none py-2 peer transition-colors"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id='lname'
              />
              <label className="absolute left-0 top-2 dark:text-white text-gray-400 transition-all duration-300 
                peer-focus:-translate-y-5 peer-focus:text-sm
                peer-valid:-translate-y-5 peer-valid:text-sm" htmlFor='lname'>
                Last Name
              </label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              required
              className="w-full bg-transparent dark:text-white text-gray-900 border-b-2 dark:border-white border-gray-400 focus:border-blue-500 outline-none py-2 peer pr-10 transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id='uname'
            />
            <label className="absolute left-0 top-2 dark:text-white text-gray-400 transition-all duration-300
              peer-focus:-translate-y-5 peer-focus:text-sm
              peer-valid:-translate-y-5 peer-valid:text-sm" htmlFor='uname'>
              Username
            </label>
            <button
              type="button"
              onClick={generateRandomUsername}
              className="absolute right-0 top-3 dark:text-white/70 text-gray-500 hover:opacity-80 transition-opacity"
              aria-label="Generate username"
            >
              <img src={RandomIcon} alt="" className='h-7 w-7' />
            
            </button>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              className="w-full bg-transparent dark:text-white text-gray-900 border-b-2 dark:border-white border-gray-400 focus:border-blue-500 outline-none py-2 peer transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
            />
            <label className="absolute left-0 top-2 dark:text-white text-gray-400 transition-all duration-300 
              peer-focus:-translate-y-5 peer-focus:text-sm
              peer-valid:-translate-y-5 peer-valid:text-sm" htmlFor='email'>
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className="w-full bg-transparent dark:text-white text-gray-900 border-b-2 dark:border-white border-gray-400 focus:border-blue-500 outline-none py-2 peer pr-8 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='pass'
            />
            <label className="absolute left-0 top-2 dark:text-white text-gray-400 transition-all duration-300
              peer-focus:-translate-y-5 peer-focus:text-sm
              peer-valid:-translate-y-5 peer-valid:text-sm" htmlFor='pass'>
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-3 dark:text-white/70 text-gray-500 hover:opacity-80 transition-opacity"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
               
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
                
              )}
            </button>
          </div>

          <button
            type="submit"
            className="relative overflow-hidden w-full dark:text-white text-gray-900 font-bold py-3 px-6 rounded-lg
              uppercase tracking-wider dark:hover:bg-white hover:bg-gray-900 dark:hover:text-black hover:text-white 
              transition-all duration-500 border-2 dark:border-white border-gray-400 hover:border-transparent"
          >
            Create Account
            <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent dark:via-white via-gray-900 to-transparent animate-btnAnim1"></span>
            <span className="absolute top-[-100%] right-0 w-[2px] h-full bg-gradient-to-b from-transparent dark:via-white via-gray-900 to-transparent animate-btnAnim2"></span>
            <span className="absolute bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent dark:via-white via-gray-900 to-transparent animate-btnAnim3"></span>
            <span className="absolute bottom-[-100%] left-0 w-[2px] h-full bg-gradient-to-t from-transparent dark:via-white via-gray-900 to-transparent animate-btnAnim4"></span>
          </button>
        </form>

        <p className="dark:text-gray-400 text-gray-600 text-sm mt-8 text-center transition-colors">
          Already have an account?{' '}
          <a href="" className="dark:text-white text-gray-900 hover:opacity-80 transition-opacity">
            Login!
          </a>
        </p>
      </div>
    </div>
  );
};

const globalStyles = `
  @keyframes btnAnim1 {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
  }
  @keyframes btnAnim2 {
    0% { top: -100%; }
    50%, 100% { top: 100%; }
  }
  @keyframes btnAnim3 {
    0% { right: -100%; }
    50%, 100% { right: 100%; }
  }
  @keyframes btnAnim4 {
    0% { bottom: -100%; }
    50%, 100% { bottom: 100%; }
  }
  .animate-btnAnim1 {
    animation: btnAnim1 1.5s linear infinite;
  }
  .animate-btnAnim2 {
    animation: btnAnim2 1.5s linear infinite;
    animation-delay: 0.375s;
  }
  .animate-btnAnim3 {
    animation: btnAnim3 1.5s linear infinite;
    animation-delay: 0.75s;
  }
  .animate-btnAnim4 {
    animation: btnAnim4 1.5s linear infinite;
    animation-delay: 1.125s;
  }
`;

<style>{globalStyles}</style>

export default SignupForm;