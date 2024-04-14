import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className="flex flex-col justify-center items-center h-screen space-y-6">
        <h1 className="text-6xl font-bold ">Oops!</h1>
        <p className="text 2xl font-bold">Sorry, an unexpected error has occurred.</p>
        <p className=" font-bold text-center">
          <i>{error.statusText || error.message}</i> <br />
        </p>
        <p>
        <i>{error.data}</i>
        </p>
        <Link to='/'> <button className="btn">Go Back</button></Link>
      </div>
    );
};

export default ErrorPage;