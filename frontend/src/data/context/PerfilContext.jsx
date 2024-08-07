import React, { createContext, useState } from 'react';

const PerfilContext = createContext({})

export function PerfilProvider(props) {
    const [mudar, setMudar] = useState(false)

    return(
        <PerfilContext.Provider
            value={{
                mudar,
                setMudar
            }}
        >
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContext;