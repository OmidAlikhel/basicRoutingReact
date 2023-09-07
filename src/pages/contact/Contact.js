import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  let navigate = useNavigate();
  const handleRetrun = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <>
      <main>
        <div className="component"> contact</div>
        <Outlet />
        <button onClick={handleRetrun}>Back to Home</button>
      </main>
    </>
  );
};

// export default Contact
