import { useEffect, useState } from "react"
import Header from "../components/Header"
import Home from "../components/Home"
import { selectPage } from "../helpers"
import useLanguage from "../hooks/useLanguage"
import SelectLanguage from "../components/SelectLanguage"

const PageLayout = ({children, activePage, setActivePage, previousPage, setPreviousPage}) => {

    const [ previousWindow, setPreviousWindow ] = useState(<Home page={"leaving"} />)

    const { language } = useLanguage()

    useEffect(()=>{
        setPreviousWindow(selectPage(previousPage, "leaving"))
    },[previousPage])

  return (
    <div>
      { !["Spanish", "English"].includes(language) ? (
          <SelectLanguage />
        )
        :
        (
          <>
            <Header activePage={activePage} setActivePage={setActivePage} setPreviousPage={setPreviousPage}/>
            <main>
                {previousWindow}
                {children}
            </main>
          </>

        )
      }
    </div>
  )
}

export default PageLayout