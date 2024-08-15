import React from "react";
import { useEffect } from "react";
import UsePerfilData from "../../../data/hook/UsePerfilData";

export default function Test(){
    const { tela, setTela, modoTab } = UsePerfilData()    

    useEffect(() =>{
        if(tela === 'test'){
            setTela(modoTab)
        }
    }, [])
    
    return(
        <div>
            Test
        </div>
    )
}