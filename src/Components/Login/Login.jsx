import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  
  return (
     <div>
      <div className="min-h-screen bg-base-200 mb-3 mt-7 flex flex-col justify-center items-center rounded-2xl w-full">
        <div className="w-full lg:w-6/12 p-5 lg:p-12">
          <div className="shadow-2xl bg-base-100 p-7 rounded-xl">
          <h1 className="text-center text-2xl font-bold">Please Login</h1>

            <form className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span>Email</span>
                </label>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input type="password" placeholder="Type Your Password" className="input input-bordered" required />
               <div className="flex justify-end">
               <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
               </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold">Login</button>
              </div>

              {/* Other Option to log in */}
              <div className="mt-8 text-center">
                <hr />
                <p>Or,</p>
                <hr />
                {/* google, github */}
                <div>
                  <h1 className="mb-4">Login with</h1>
                  <button className="btn mr-7"><FaGoogle></FaGoogle> Google</button>
                  <button className="btn"><FaGithub></FaGithub> GitHub</button>
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