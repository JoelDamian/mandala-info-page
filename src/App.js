import './App.css';
import Carousel from './components/Carousel/carousel';
import Footer from './components/custom-footer/custom-footer';
import Members from './components/Members/members';
import NavBar from './components/NavBar/navbar';
import Music from './components/music/music';
import ReactPlayer from 'react-player/youtube';
import CustomFooter from './components/custom-footer/custom-footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Carousel></Carousel> */}
      <Music></Music>
      <Members></Members>
      <div style={{width: "100%", height: "700px"}}>
      <ReactPlayer url='https://youtu.be/X3438nv4SsE' controls width="100%" height="700px"/>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}

export default App;
