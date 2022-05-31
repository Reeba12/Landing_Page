import React, { useRef } from "react";
import Appbar from "../../Components/AppBar";
import UpperDiv from "../../Components/UpperDiv";


const Home = () => {
  const parallax = useRef(null);
  return <>
  <Appbar/>
  <UpperDiv/>
  </>;
};

export default Home;
