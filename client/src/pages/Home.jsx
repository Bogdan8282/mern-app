import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <main>
        <h1>{message}</h1>
      </main>
    </>
  );
};

export default Home;
