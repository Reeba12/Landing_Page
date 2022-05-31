import Appbar from './Components/AppBar'
import React, { useRef, useEffect} from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './Screens/Home/Home';
import Service from './Screens/Service/Service';
import UpperDiv from './Components/UpperDiv';
import Card from './Components/Card'
import About from './Screens/About/About';
import 'antd/dist/antd.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Test from './Screens/Testimonals/Test';
import Contact from './Screens/ContactUs/Contact';
import Footer from './Components/Footer';
import Package from './Screens/Packages/Package';


const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const parallax = useRef(null)


  
  return (
<>
{/* <Appbar /> */}
<Home/>
<Service/>
<About/>
<Test/>
<Package/>
<Contact/>
<Footer/>
{/* <Card/> */}
{/* <div style={{ width: '100%', background: '#253237' }}>
  <Parallax pages={2} style={{ top: '0', left: '0',bottom:'0' }}>
    
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Home/>
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    <Service />
  </ParallaxLayer>
</Parallax>
    </div> */}
</>)
  
}

export default App;
