import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword, photoUrl, 'form submited');
    setError('');
    setSuccess('');

    // Conditional validation
    if (password.length < 6) {
      setError('Your password should be at least 6 characters or longer..!')
      return;
    }

    else if (password !== confirmPassword) {
      setError("Password didn't match..!")
      return;
    }

    else if (!/[A-Z]/.test(password)) {
      setError('Your password should have at least one Uppercase charater..!')
      return;
    }
    else if (!/[a-z]/.test(password)) {
      setError('Your password should have at least one Lowercase charater..!')
      return;
    }

    // Password Authentication
    createUserWithEmailAndPassword(Auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Registration Successfull..!')
        toast('You have Succesfully Registered..!')
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
  }
  return (
    <div>
      <div className="min-h-screen bg-base-200 mb-3 mt-7 flex flex-col justify-center items-center rounded-2xl w-full">
        <div className="w-full lg:w-6/12 p-5 lg:p-12">
          <div className="shadow-2xl p-7 bg-base-100 rounded-xl">
            <h1 className="text-center text-2xl font-bold">Register Your Account</h1>

            {/* form start */}
            <form onSubmit={handleRegister}>
              <div className="">
                <label className="label ">
                  Name
                </label>
                <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered w-full" />
              </div>
              <div>
                <label className="label ">
                  Photo URL
                </label>
                <input type="text" name='photoUrl' placeholder="Upload Your Photo" className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label ">
                  Email
                </label>
                <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span >Password</span>
                </label>
                <div className="relative form-control">
                  <input type={showPassword ? "text" : "password"} name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                  <span className="absolute right-5 top-4 text-lg" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>

                {/* confirm password */}
              <div className="form-control">
                <label className="label">
                  <span >Confirm Password</span>
                </label>
                <div className="relative form-control">
                  <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' placeholder="Confirm Your Password" className="input input-bordered" required />
                  <span className="absolute right-5 top-4 text-lg" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>

              {/* showing validation */}
              {
                error && <p className="mt-2 text-red-600  ">{error}</p>
              }
              {
                success && <p className="mt-2  text-green-600 ">{success}</p>
              }
              <ToastContainer></ToastContainer>

              {/* submit button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary font-bold">Register</button>
              </div>

              {/* Other Option to log in */}
              <div className="mt-8 text-center">
                <hr />
                <p>Or,</p>
                <hr />
                {/* google, github */}
                <div>
                  <h1 className="mb-4">Register with</h1>
                  <button className="btn mr-7"><FaGoogle></FaGoogle> Google</button>
                  <button className="btn"><FaGithub></FaGithub> GitHub</button>
                </div>
              </div>
              <p className="mt-7 text-center">Already member? Please <Link to='/login' className="text-blue-600 font-bold">Login.</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;