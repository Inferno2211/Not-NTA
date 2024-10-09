import React from "react";
import { GoogleLogin } from 'react-google-login';

const LogIn = () => {
  const responseGoogle = (response) => {
    window.open('http://localhost:5000/auth/google', '_self'); // Redirect to backend for Google auth
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-300 shadow-lg rounded-2xl p-10 w-3/5 flex flex-col items-center">
        <h1 className="text-black text-4xl font-montserrat font-normal mb-10">Sign In/Sign Up</h1>
        <div className="w-80 h-12 bg-blue-200 flex items-center justify-start px-5 rounded-md">
          <div className="flex items-center gap-2">
            <div className="w-9 h-8 relative">
              {/* Google icon placeholder */}
              <div className="absolute w-8 h-8 bg-white"></div>
              <div className="absolute w-6 h-3 bg-red-600 left-1 top-0.5"></div>
              <div className="absolute w-2 h-4 bg-yellow-400 left-1 top-6"></div>
              <div className="absolute w-4 h-3 bg-blue-700 left-4 top-2"></div>
              <div className="absolute w-6 h-3 bg-green-600 left-1 top-8"></div>
            </div>
            <div className="text-black text-lg font-montserrat font-normal">
              <GoogleLogin
                clientId="your-client-id"
                buttonText=""
                onSuccess={responseGoogle}
                onFailure={(response) => console.log(response)}
                cookiePolicy={'single_host_origin'}
                style={{ display: 'none' }} // Hide default button
              />
              Sign In with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
