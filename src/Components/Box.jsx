import React from "react";
import styled from "styled-components";
import { BoxChar } from "./App.styled";

export const Box =({item})=>{
   
    return(
        <BoxChar>
            <h2>{item.name}</h2>
            <h3>{item.nickname}</h3>
            <img src ={item.img} alt =""/>
            <h2>{item.portrayed}</h2>
        </BoxChar>
    )
}