import React from "react";

function Error() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Home
        </a>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Error;
