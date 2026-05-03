import { createContext } from "react";

export const PlayeContext=createContext();



const PlayeContextProvider=(props)=>{



    const contextValue={


    }

    return(
            <PlayerContext.Provider value={contextValue}>
                {props.children}
            </PlayerContext.Provider>



    )
}



export default PlayeContextProvider;