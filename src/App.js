import React, { useState, useEffect } from 'react';
import Home from "./pages/Home";
import Loading from "./components/Loading";
import './style/style.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Home />}
    </>
  );
}

export default App;
