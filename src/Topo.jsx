import React from "react";
import Logo from './assets/logo-sct.png';

export function Topo(){
    return(
        <header className="topo">
            
            <img src={Logo} alt="" />
            <h1>#SeLigaNaSCT</h1>
        </header>
    )
}