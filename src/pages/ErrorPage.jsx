import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Helmet>
                <title>Career | Error Page</title>
            </Helmet>
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">Oops</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">There Are No Data</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>
        
          <Link to="/"><button
          className="btn btn-neutral rounded-lg hover:bg-green-600 transition"
        >Go back Home page</button></Link>
        
      </div>
    </div>
    );
};

export default ErrorPage;