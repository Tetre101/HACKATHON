import React from "react";
import { useState } from "react";
import { HomeContainer, HomeBoxes, HomeSearch } from "./App.styled";
import { Box } from "./Box";
import { CONST_VIDEO } from "./App.styled";

export const Home =({items, getInfo})=>{
    const [input, setInput] = useState("")

    const onChange = (e) =>{
        setInput(e);
        getInfo(e);
    };


    return(
        <HomeContainer>
            <HomeSearch>
                <h2
                    autoplay muted loop = "true">
                        <source src = {CONST_VIDEO} type = "video/mp4" /> search for the character</h2>
                <form>
                    <input type = "text" placeholder ="insert the name" 
                    autoFocusvalue ={input}
                    onChange ={(e)=>onChange(e.target.value)}
                    />
                </form>
            </HomeSearch>
            <HomeBoxes>
                {items.map((item)=>(
                    <Box key={item.char_id} item ={item}/>
                ))}
            </HomeBoxes>
        </HomeContainer>
    )
}