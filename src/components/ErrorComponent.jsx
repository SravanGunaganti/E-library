import { useRouteError } from "react-router-dom";

function ErrorComponent() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-red-400 mb-4">OOPS!</h1>
        <p className="text-xl text-gray-400 mb-4">Something went wrong.</p>
        <p className="text-xl text-gray-100 mb-6 font-mono p-2 rounded">
          {error.statusText}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-600  hover:text-gray-100 transition duration-300 ease-in-out">
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default ErrorComponent;
