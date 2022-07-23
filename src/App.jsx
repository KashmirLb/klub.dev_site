import { useEffect, useState } from "react"
import Home from "./components/Home"
import { selectPage } from "./helpers"
import PageLayout from "./layout/PageLayout"
import useDocumentTitle from "./hooks/useDocumentTitle"
import { LanguageProvider } from "./context/LanguageProvider"

function App() {

  const [ activePage, setActivePage ] = useState("Home")
  const [ previousPage, setPreviousPage ] = useState("")
  const [ activeWindow, setActiveWindow ] = useState(<Home/>)

  useDocumentTitle(`Kashmir Lub | ${activePage}`)

  useEffect(()=>{
    setActiveWindow(selectPage(activePage, "starting"))
  }, [activePage])

  return (

    <>    
      <LanguageProvider>
        <PageLayout activePage={activePage} setActivePage={setActivePage} previousPage={previousPage} setPreviousPage={setPreviousPage}>
          {activeWindow}
        </PageLayout>
      </LanguageProvider>
    </>
  )
}

export default App
