import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { navSelected } from "../helpers"
import useLanguage from "../hooks/useLanguage"

const Header = ({activePage, setActivePage, setPreviousPage}) => {

    const [ disabled, setDisabled ] = useState(false)
    const { language, languageData, obtainLanguage } = useLanguage()


    const { navHome, navAtelier, navOrder, navGames, navContact } = languageData

    const handlePageChange = (select)=>{
        setDisabled(true)
        setActivePage(select)
        setPreviousPage(activePage)
        setTimeout(()=>{
            setDisabled(false)
        },1200)
    }

    const handleLanguageSwitch = () =>{
        

        if(!disabled){
            setDisabled(true)
            if(language==="English"){
                localStorage.setItem("languageSelected", "Spanish")
                toast("Cambiado a Español",{
                    theme: "dark"
                })
            }
            else{
                localStorage.setItem("languageSelected", "English")
                toast("Changed to English",{
                    theme: "dark"
                })
            }
            obtainLanguage()
            setTimeout(()=>{
                setDisabled(false)
            },1200)
        }
    }

  return (
    <header>
        <img src="klub-logo2.png" width={200} height={30}/>
        <nav className="header-nav">
            <div className={`header-button-container ${navSelected(activePage, "Home")}`}>
                <button
                    disabled={disabled}
                    onClick={()=>handlePageChange("Home")}
                >{navHome}</button>
            </div>
            <div className={`header-button-container ${navSelected(activePage, "Atelier")}`}>
                <button
                    disabled={disabled}
                    onClick={()=>handlePageChange("Atelier Project")}
                >{navAtelier}</button>
            </div>
            <div className={`header-button-container ${navSelected(activePage, "Order")}`}>
                <button
                    disabled={disabled}
                    onClick={()=>handlePageChange("Order Project")}
                >P{navOrder}</button>
            </div>
            <div className={`header-button-container ${navSelected(activePage, "Game")}`}>
                <button
                    disabled={disabled}
                    onClick={()=>handlePageChange("Game Project")}
                >{navGames}</button>
            </div>
            <div className={`header-button-container ${navSelected(activePage, "Contact")}`}>
                <button
                    disabled={disabled}
                    onClick={()=>handlePageChange("Contact")}
                >{navContact}</button>
            </div>
            <div className="language-icon-container">
                <div className={language} onClick={handleLanguageSwitch}/>
            </div>
        </nav>
        <ToastContainer 
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={true}
        />
    </header>
  )
}

export default Header