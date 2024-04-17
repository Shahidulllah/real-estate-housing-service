import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, 'login submit');
    setLoginError('');
    setLoginSuccess('');

    // Login authentication
    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        setLoginSuccess("Login Successfull..!")
        toast('You have Logged in Successfully..!')
        e.target.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        setLoginError('Email and Password is not correct..!');
      })
  }

  // GoogleLogin
  const handleGoogleLogin = ()=>{
      googleLogin()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.error(error)
      })
  }

  // GitHubLogin
  const handleGitHubLogin = ()=>{
    gitHubLogin()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error =>{
        console.error(error)
      })
  }

  return (
    <div>
      <div className="min-h-screen bg-base-200 mb-3 mt-7 flex flex-col justify-center items-center rounded-2xl w-full">
        <div className="w-full lg:w-6/12 p-5 lg:p-12">
          <div className="shadow-2xl bg-base-100 p-7 rounded-xl">
            <h1 className="text-center text-2xl font-bold">Please Login</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span>Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <div className="relative form-control">
                  <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                  <span className="absolute right-5 top-4 text-lg" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="flex justify-end">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
              </div>

              {
                loginError && <p className="mt-2 text-red-600 font-serif">{loginError}</p>
              }
              {
                loginSuccess && <p className="mt-2 text-xl text-green-600 font-serif">{loginSuccess}</p>
              }
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary font-bold">Login</button>
              </div>

              <ToastContainer></ToastContainer>
              {/* Other Option to log in */}
              <div className="mt-8 text-center">
                <hr />
                <p>Or,</p>
                <hr />
                {/* google, github */}
                <div>
                  <h1 className="mb-4">Login with</h1>
                  <button onClick={handleGoogleLogin} className="btn mr-7"><FaGoogle></FaGoogle> Google</button>
                  <button onClick={handleGitHubLogin} className="btn"><FaGithub></FaGithub> GitHub</button>
                </div>
              </div>
              <p className="mt-7 text-center">Not a member? Please <Link to='/register' className="text-blue-600 font-bold">Register.</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;