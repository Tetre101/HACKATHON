import "./App.css";
// import styled from 'styled-components';
// import Home from "./Components/Home";
// import Box from "./Components/Box";
import {useEffect, useState} from "react";
import image from "./Assets/image.jpg";
import image1 from "./Assets/image1.jpg"
import{BoxImg, Container, Img1, Img2} from "./Components/App.styled"
import {Home} from "./Components/Home"

function App() {
const [items, setItems] = useState ([]);
const [info, setInfo] = useState("");

useEffect(()=>{
const fetchData = async ()=>{
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters?name=${info}`);
const data = await res.json();
setItems(data);
// console.log(data);
};
fetchData();
}, [info]);


  return (
    <div className="App">
      <Container>
        <BoxImg>
          {/* <Img1 src = {image}/> */}
          <Img2 src = {image1}/>
        </BoxImg>
      </Container>
      <Home items = {items} getInfo ={(e) => setInfo(e)} />
    </div>
  );
};

export default App;
