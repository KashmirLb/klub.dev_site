import React from 'react'
import useLanguage from '../hooks/useLanguage'

const SelectLanguage = () => {

    const { obtainLanguage } = useLanguage()

    const languageClicked = language =>{
        localStorage.setItem("languageSelected", language)
        obtainLanguage()
    }

  return (
    <div className="select-language-container">
        <div className="select-language-box">
            <div className="language-container" onClick={()=>languageClicked("English")}>
                <img src="/english.png" height={150}/>
                <p>English</p>
            </div>
            <div className="language-container" onClick={()=>languageClicked("Spanish")}>
                <img src="/spanish.png" height={150}/>
                <p>Spanish</p>
            </div>
        </div>
    </div>
  )
}

export default SelectLanguage