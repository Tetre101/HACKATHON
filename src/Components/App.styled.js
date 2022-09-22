import React from "react";
import styled from "styled-components";
import video from "../Assets/video.mp4"

export const Container =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;

export const BoxImg = styled.div`
position:relative;
height:100%;
`;
export const Img1 = styled.img`
position:absolute;
height:140px;
object=fit:contain;
top:140px;
left:100px;
z-index:2;
`;

export const Img2 = styled.img`
object-fit:contain;
width:100%
`;

export const HomeContainer =styled.div`
color:black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const HomeSearch = styled.div`
color:black;
display:flex;
flex-direction:column;
align-items:center;
height: 200px;
& > h2{
    font-size:40px;
    color:black;
    margin:20px auto 0
}
& > form{
    width:100%;
    height:100px;
    display:flex;
flex-direction:column;
align-items:center;
margin:10px auto;
}
& > input{
    margin-top:20px;
width: 80%;
height:40px;
border-radius:10px;
font-size:16px;
font-weight:700;

}
`;
export const HomeBoxes = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
background-color:black;
`;

export const BoxChar = styled.div`
border-radius:4px;
height:380px;
width:240px;
color:whitesmoke;
display:flex;
flex-direction:column;
justify-content:center;
margin:40px 20px 20px;
align-items:center;

& > h2{
    text-align:center;
    font-size:20px;
}
& > h3{
    color:"#1c4a27";
    font-size:14px;
}
& > img {
    width:200px;
    border-radius:20px;
    object-fit:cover;
    height:270px;
}
`;
export const CONST_VIDEO ={
    intro:video
};
