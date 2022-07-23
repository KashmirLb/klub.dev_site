import { useEffect } from "react";
import { createContext, useState } from "react";
import English from "../data/English";
import Spanish from "../data/Spanish";

const LanguageContext = createContext()

const LanguageProvider = ({children})=>{

    const [ language, setLanguage ] = useState("")
    const [ languageData, setLanguageData ] = useState({})

    const obtainLanguage = () =>{
        const sessionLanguage = localStorage.getItem("languageSelected")
        setLanguage(sessionLanguage)
    }

    useEffect(()=>{
        obtainLanguage()

        if(language==="English"){
            setLanguageData(English)
        }
        else if(language==="Spanish"){
            setLanguageData(Spanish)
        }
    },[language])

    return(
        <LanguageContext.Provider

            value={{
                language,
                obtainLanguage,
                languageData
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export {
    LanguageProvider
}

export default LanguageContext