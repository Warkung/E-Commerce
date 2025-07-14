import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { HiOutlineTerminal } from "react-icons/hi";

function LoadingToRedirect() {
  const [count, setCount] = useState(3);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interval);
          setRedirect(true);
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono text-gray-300 bg-gray-900">
      <HiOutlineTerminal className="w-16 h-16 mb-4 text-cyan-400 animate-pulse" />
      <p className="text-2xl font-bold tracking-wider">ACCESS DENIED</p>
      <p className="mt-2 text-lg">Redirecting to login in {count}...</p>
    </div>
  );
}
export default LoadingToRedirect;
